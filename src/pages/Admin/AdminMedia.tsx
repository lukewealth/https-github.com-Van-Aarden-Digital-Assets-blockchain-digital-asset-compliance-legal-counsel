import React, { useState } from 'react';
import AdminNav from '../../components/AdminNav';

interface UploadedFile {
  name: string;
  url: string;
  uploadedAt: string;
}

const AdminMedia: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      setFiles(prev => [...prev, {
        name: data.filename,
        url: data.url,
        uploadedAt: new Date().toISOString(),
      }]);
      setError('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-navy pt-24">
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <div className="mb-10">
            <h1 className="font-serif text-4xl text-white uppercase mb-2">Media Manager</h1>
            <p className="text-steel text-sm uppercase tracking-widest">Upload and manage images & PDFs</p>
          </div>

          {error && (
            <div className="p-4 bg-red-900/20 border border-red-900/50 rounded text-red-200 mb-6">
              {error}
            </div>
          )}

          {/* Upload Section */}
          <div className="bg-white/5 border border-gold/20 rounded-lg p-8 mb-8">
            <label className="block cursor-pointer">
              <div className="text-center py-12 border-2 border-dashed border-gold/30 rounded-lg hover:border-gold/50 transition-colors">
                <p className="text-gold text-lg font-semibold mb-2">📁 Click to upload or drag and drop</p>
                <p className="text-steel text-sm uppercase tracking-widest">PNG, JPG, WEBP, PDF (max 50MB)</p>
              </div>
              <input
                type="file"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
                accept=".png,.jpg,.jpeg,.webp,.pdf"
              />
            </label>
            {uploading && <p className="text-center text-steel mt-4">Uploading...</p>}
          </div>

          {/* Uploaded Files */}
          {files.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-serif text-xl text-white uppercase mb-4">Uploaded Files</h3>
              {files.map((file) => (
                <div
                  key={file.url}
                  className="bg-white/5 border border-gold/20 rounded-lg p-4 flex items-center justify-between hover:border-gold/50 transition-all"
                >
                  <div>
                    <p className="text-white font-semibold">{file.name}</p>
                    <code className="text-xs text-steel break-all">{file.url}</code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(file.url)}
                    className="px-4 py-2 bg-gold/20 text-gold rounded text-xs font-semibold uppercase tracking-widest hover:bg-gold/40 transition-colors whitespace-nowrap ml-4"
                  >
                    Copy URL
                  </button>
                </div>
              ))}
            </div>
          )}

          {files.length === 0 && !uploading && (
            <div className="text-center py-12 text-steel">
              <p>No files uploaded yet.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminMedia;
