import express from 'express';
import cors from 'cors';
import multer from 'multer';
import sqlite3 from 'sqlite3';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'vdac-admin-123';
const activeSessions = new Map();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('dist'));
app.use('/uploads', express.static('uploads'));

// Setup multer for file uploads
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

// Initialize SQLite Database
const dbPath = path.join(__dirname, 'vdac.db');
const db = new sqlite3.Database(dbPath);

const initializeDatabase = () => {
  db.serialize(() => {
    // Posts table
    db.run(`CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      excerpt TEXT,
      body TEXT,
      category TEXT,
      tags TEXT,
      featured_image TEXT,
      status TEXT DEFAULT 'draft',
      publish_date TEXT,
      seo_title TEXT,
      seo_description TEXT,
      canonical_url TEXT,
      created_at TEXT,
      updated_at TEXT
    )`);

    // Publications table
    db.run(`CREATE TABLE IF NOT EXISTS publications (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      summary TEXT,
      pdf_url TEXT,
      publish_date TEXT,
      tags TEXT,
      featured_image TEXT,
      created_at TEXT,
      updated_at TEXT
    )`);

    // Contact Messages table
    db.run(`CREATE TABLE IF NOT EXISTS contact_messages (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      organization TEXT,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'new',
      internal_notes TEXT,
      timestamp TEXT,
      created_at TEXT
    )`);
  });
};

initializeDatabase();

// Helper functions
const generateId = () => Math.random().toString(36).substring(2, 11);
const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
const generateToken = () => crypto.randomBytes(32).toString('hex');

// AUTHENTICATION ENDPOINTS

app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;

  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  const token = generateToken();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  
  activeSessions.set(token, {
    createdAt: new Date(),
    expiresAt: new Date(expiresAt),
  });

  res.json({ token, expiresAt });
});

app.post('/api/auth/logout', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (token) {
    activeSessions.delete(token);
  }
  res.json({ success: true });
});

// Verify token middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const session = activeSessions.get(token);
  if (!session) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  if (session.expiresAt < new Date()) {
    activeSessions.delete(token);
    return res.status(401).json({ error: 'Token expired' });
  }

  req.user = { role: 'admin' };
  next();
};

// ADMIN DASHBOARD ENDPOINTS

app.get('/api/admin/dashboard', verifyToken, (req, res) => {
  const stats = {};

  db.get('SELECT COUNT(*) as count FROM posts WHERE status = ?', ['draft'], (err, drafts) => {
    stats.draftPosts = err ? 0 : drafts?.count || 0;

    db.get('SELECT COUNT(*) as count FROM posts WHERE status = ?', ['published'], (err, published) => {
      stats.publishedPosts = err ? 0 : published?.count || 0;

      db.get('SELECT COUNT(*) as count FROM contact_messages WHERE status = ?', ['new'], (err, newMessages) => {
        stats.newMessages = err ? 0 : newMessages?.count || 0;

        db.get('SELECT COUNT(*) as count FROM publications', (err, publications) => {
          stats.totalPublications = err ? 0 : publications?.count || 0;
          res.json(stats);
        });
      });
    });
  });
});

// POSTS (BLOG) CMS ENDPOINTS

app.get('/api/posts', (req, res) => {
  const { status = 'published' } = req.query;
  if (status === 'all') {
    db.all('SELECT * FROM posts ORDER BY publish_date DESC', (err, rows) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.json(rows || []);
    });
  } else {
    db.all('SELECT * FROM posts WHERE status = ? ORDER BY publish_date DESC', [status], (err, rows) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.json(rows || []);
    });
  }
});

app.get('/api/posts/:slug', (req, res) => {
  db.get('SELECT * FROM posts WHERE slug = ?', [req.params.slug], (err, row) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!row) return res.status(404).json({ error: 'Post not found' });
    res.json(row);
  });
});

app.post('/api/posts', verifyToken, (req, res) => {
  const {
    title,
    excerpt,
    body,
    category,
    tags,
    featured_image,
    status,
    seo_title,
    seo_description,
  } = req.body;

  const id = generateId();
  const slug = generateSlug(title);
  const now = new Date().toISOString();

  db.run(
    `INSERT INTO posts (id, title, slug, excerpt, body, category, tags, featured_image, status, publish_date, seo_title, seo_description, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, title, slug, excerpt, body, category, JSON.stringify(tags), featured_image, status, now, seo_title, seo_description, now, now],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id, slug });
    }
  );
});

app.put('/api/posts/:id', verifyToken, (req, res) => {
  const { title, excerpt, body, category, tags, featured_image, status, seo_title, seo_description } = req.body;
  const now = new Date().toISOString();

  db.run(
    `UPDATE posts SET title = ?, excerpt = ?, body = ?, category = ?, tags = ?, featured_image = ?, status = ?, seo_title = ?, seo_description = ?, updated_at = ? WHERE id = ?`,
    [title, excerpt, body, category, JSON.stringify(tags), featured_image, status, seo_title, seo_description, now, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true });
    }
  );
});

app.delete('/api/posts/:id', verifyToken, (req, res) => {
  db.run('DELETE FROM posts WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// PUBLICATIONS CMS ENDPOINTS

app.get('/api/publications', (req, res) => {
  db.all('SELECT * FROM publications ORDER BY publish_date DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(rows || []);
  });
});

app.post('/api/publications', verifyToken, (req, res) => {
  const { title, type, summary, pdf_url, tags, featured_image } = req.body;
  const id = generateId();
  const now = new Date().toISOString();

  db.run(
    `INSERT INTO publications (id, title, type, summary, pdf_url, publish_date, tags, featured_image, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, title, type, summary, pdf_url, now, JSON.stringify(tags), featured_image, now, now],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id });
    }
  );
});

app.put('/api/publications/:id', verifyToken, (req, res) => {
  const { title, type, summary, pdf_url, tags, featured_image } = req.body;
  const now = new Date().toISOString();

  db.run(
    `UPDATE publications SET title = ?, type = ?, summary = ?, pdf_url = ?, tags = ?, featured_image = ?, updated_at = ? WHERE id = ?`,
    [title, type, summary, pdf_url, JSON.stringify(tags), featured_image, now, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true });
    }
  );
});

app.delete('/api/publications/:id', verifyToken, (req, res) => {
  db.run('DELETE FROM publications WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// CONTACT MESSAGES ENDPOINTS

app.post('/api/contact', (req, res) => {
  const { name, organization, email, message } = req.body;
  const id = generateId();
  const now = new Date().toISOString();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  db.run(
    `INSERT INTO contact_messages (id, name, organization, email, message, status, timestamp, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, name, organization || '', email, message, 'new', now, now],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id, success: true });
    }
  );
});

app.get('/api/messages', verifyToken, (req, res) => {
  const { status, limit = 50, offset = 0 } = req.query;
  const query = status 
    ? 'SELECT * FROM contact_messages WHERE status = ? ORDER BY created_at DESC LIMIT ? OFFSET ?'
    : 'SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT ? OFFSET ?';
  
  const params = status ? [status, parseInt(limit), parseInt(offset)] : [parseInt(limit), parseInt(offset)];
  
  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(rows || []);
  });
});

app.get('/api/messages/:id', verifyToken, (req, res) => {
  db.get('SELECT * FROM contact_messages WHERE id = ?', [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!row) return res.status(404).json({ error: 'Message not found' });
    res.json(row);
  });
});

app.put('/api/messages/:id', verifyToken, (req, res) => {
  const { status, internal_notes } = req.body;
  db.run(
    'UPDATE contact_messages SET status = ?, internal_notes = ? WHERE id = ?',
    [status, internal_notes, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true });
    }
  );
});

// FILE UPLOAD ENDPOINT

app.post('/api/upload', verifyToken, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl, filename: req.file.filename });
});

// Serve static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✓ VDAC Admin API running on http://localhost:${PORT}`);
});
