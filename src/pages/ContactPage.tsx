import React, { useState } from 'react';
import { useToast } from '../components/ui/Toast';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailAddress = 'aryanpandey.build@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    showToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name')?.toString().trim()) || formData.name;
    const email = (data.get('email')?.toString().trim()) || formData.email;
    const message = (data.get('message')?.toString().trim()) || formData.message;

    if (name && email && message) {
      setFormData({ name, email, message });
      setFormSent(true);
      showToast('Message submitted! I will get back to you soon.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
          Contact
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Let's connect.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          Whether you have an interesting product problem to solve, want to discuss software and hardware engineering, or just want to say hi, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Direct Contact Cards */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white space-y-4 shadow-xs">
            <h2 className="text-sm font-semibold text-gray-900 uppercase font-mono tracking-wider">
              Direct Email
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              For direct inquiries, consulting, or project collaborations.
            </p>

            <div className="space-y-2 pt-2">
              <a
                href={`mailto:${emailAddress}`}
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-mono transition-colors flex items-center justify-between"
              >
                <span className="truncate mr-2">{emailAddress}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white space-y-3 shadow-xs">
            <h2 className="text-sm font-semibold text-gray-900 uppercase font-mono tracking-wider">
              Profiles & Code
            </h2>

            <div className="space-y-2 pt-1 text-xs">
              <a
                href="https://github.com/aryanpandey28"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 text-gray-800 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="font-medium">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 text-gray-800 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="font-medium">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white space-y-6 shadow-xs">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-gray-900">Send a direct message</h2>
              <p className="text-xs text-gray-500">
                Leave a message and your contact details, and I'll respond within 24–48 hours.
              </p>
            </div>

            {formSent ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-sm">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Message Sent Successfully</span>
                </div>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Thank you for reaching out, {formData.name}. I will review your message and reply back to {formData.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-medium text-gray-700 block">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-medium text-gray-700 block">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-medium text-gray-700 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about what you're working on..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
