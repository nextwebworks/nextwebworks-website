'use client';

import { useState } from 'react';
import { submitLead } from '@/app/actions/lead.js';

export default function PbiInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agencyName: '',
    scopePlatform: 'Power BI Embedded / Custom Visuals',
    message: '',
    website_hp: '',
  });

  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isValidName = formData.name.trim().length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    if (!isValidName || !isValidEmail) return;

    setLoading(true);
    setStatus(null);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('agencyName', formData.agencyName);
    data.append('scopePlatform', formData.scopePlatform);
    data.append('message', formData.message);
    data.append('website_hp', formData.website_hp);
    data.append('formType', 'contact');
    data.append('source', 'poc:power-bi-chatbot');

    try {
      const res = await submitLead(data);
      if (res.success) {
        setStatus({
          type: 'success',
          message: res.message || 'Inquiry received! Our team will contact you within 24 hours with pilot scoping details.',
        });
        setFormData({
          name: '',
          email: '',
          agencyName: '',
          scopePlatform: 'Power BI Embedded / Custom Visuals',
          message: '',
          website_hp: '',
        });
        setTouched({});
      } else {
        setStatus({
          type: 'error',
          message: res.error || 'Failed to submit inquiry. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error submitting inquiry. Please email contact@nextwebworks.in.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="inquiry-form" className="w-full max-w-2xl mx-auto rounded-2xl bg-slate-900/80 border border-slate-800 p-8 shadow-xl backdrop-blur-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Request Enterprise Pilot Deployment</h3>
        <p className="text-sm text-slate-400">
          Interested in embedding AI conversational analytics in your Power BI reports? Submit your deployment requirements below.
        </p>
      </div>

      {status?.type === 'success' ? (
        <div className="rounded-xl bg-emerald-950/60 border border-emerald-500/40 p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-white mb-1">Pilot Request Submitted</h4>
          <p className="text-sm text-emerald-200/80">{status.message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field for bot trap */}
          <input
            type="text"
            name="website_hp"
            value={formData.website_hp}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <input type="hidden" name="source" value="poc:power-bi-chatbot" />

          {status?.type === 'error' && (
            <div className="rounded-lg bg-red-950/60 border border-red-500/40 p-4 text-sm text-red-200">
              {status.message}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                placeholder="Jane Doe"
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                  touched.name && !isValidName
                    ? 'border-red-500/70 focus:ring-red-500/50'
                    : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/30'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                placeholder="jane@company.com"
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                  touched.email && !isValidEmail
                    ? 'border-red-500/70 focus:ring-red-500/50'
                    : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/30'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                name="agencyName"
                value={formData.agencyName}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Deployment Target
              </label>
              <select
                name="scopePlatform"
                value={formData.scopePlatform}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
              >
                <option value="Power BI Embedded / Custom Visuals">Power BI Embedded / Custom Visuals</option>
                <option value="Power BI Service / Desktop Sideload">Power BI Service / Desktop Sideload</option>
                <option value="Microsoft Fabric Semantic Models">Microsoft Fabric Semantic Models</option>
                <option value="Custom Enterprise Visual Architecture">Custom Enterprise Visual Architecture</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Pilot Requirements & Semantic Model Scale
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your reporting use case, semantic model size, or compliance requirements..."
              className="w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-sm hover:from-indigo-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Submitting Pilot Request...
              </>
            ) : (
              'Submit Pilot Inquiry'
            )}
          </button>
        </form>
      )}
    </div>
  );
}
