import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/AdminNav';

interface Message {
  id: string;
  name: string;
  organization: string;
  email: string;
  message: string;
  status: 'new' | 'read' | 'archived';
  internal_notes: string;
  timestamp: string;
}

const AdminInbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [internalNotes, setInternalNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/messages', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch messages');
      const data = await response.json();
      setMessages(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectMessage = (msg: Message) => {
    setSelectedMessage(msg);
    setInternalNotes(msg.internal_notes || '');
    
    if (msg.status === 'new') {
      updateMessageStatus(msg.id, 'read');
    }
  };

  const updateMessageStatus = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/messages/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status, internal_notes: internalNotes }),
      });

      if (!response.ok) throw new Error('Failed to update message');
      fetchMessages();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleArchive = () => {
    if (selectedMessage) {
      updateMessageStatus(selectedMessage.id, 'archived');
      setSelectedMessage(null);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-navy pt-24">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="mb-10">
            <h1 className="font-serif text-4xl text-white uppercase mb-2">Contact Inbox</h1>
            <p className="text-steel text-sm uppercase tracking-widest">Submissions from the website</p>
          </div>

          {error && (
            <div className="p-4 bg-red-900/20 border border-red-900/50 rounded text-red-200 mb-6">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Messages List */}
            <div className="lg:col-span-1">
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {loading ? (
                  <div className="text-center py-6 text-steel">Loading...</div>
                ) : messages.length === 0 ? (
                  <div className="text-center py-6 text-steel text-sm">No messages</div>
                ) : (
                  messages.map((msg) => (
                    <button
                      key={msg.id}
                      onClick={() => handleSelectMessage(msg)}
                      className={`w-full text-left p-4 rounded border transition-all ${
                        selectedMessage?.id === msg.id
                          ? 'bg-gold/20 border-gold'
                          : 'bg-white/5 border-gold/20 hover:border-gold/50'
                      } ${msg.status === 'new' ? 'ring-2 ring-green-500/50' : ''}`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-white text-sm">{msg.name}</p>
                          <p className="text-xs text-steel truncate">{msg.email}</p>
                        </div>
                        {msg.status === 'new' && (
                          <span className="px-2 py-1 bg-green-900/20 text-green-200 text-xs rounded font-semibold">
                            New
                          </span>
                        )}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2">
              {selectedMessage ? (
                <div className="bg-white/5 border border-gold/20 rounded-lg p-8">
                  <div className="mb-6 pb-6 border-b border-gold/20">
                    <h3 className="font-serif text-2xl text-white mb-4">{selectedMessage.name}</h3>
                    <div className="space-y-2 text-sm text-steel">
                      <p><strong>Email:</strong> {selectedMessage.email}</p>
                      <p><strong>Organization:</strong> {selectedMessage.organization || 'N/A'}</p>
                      <p><strong>Date:</strong> {new Date(selectedMessage.timestamp).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
                      Message
                    </h4>
                    <p className="text-white whitespace-pre-wrap text-sm leading-relaxed">
                      {selectedMessage.message}
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                      Internal Notes
                    </label>
                    <textarea
                      value={internalNotes}
                      onChange={(e) => setInternalNotes(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors text-sm"
                      placeholder="Add internal notes..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => updateMessageStatus(selectedMessage.id, 'read')}
                      className="px-6 py-3 bg-gold/20 text-gold rounded font-semibold uppercase tracking-widest text-xs hover:bg-gold/40 transition-colors"
                    >
                      Mark as Read
                    </button>
                    <button
                      onClick={handleArchive}
                      className="px-6 py-3 bg-white/5 border border-gold/30 text-gold rounded font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
                    >
                      Archive
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 border border-gold/20 rounded-lg p-8 text-center py-20">
                  <p className="text-steel text-sm uppercase tracking-widest">
                    Select a message to view details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminInbox;
