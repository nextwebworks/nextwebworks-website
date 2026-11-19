'use client';

import { useState } from 'react';
import Link from 'next/link';
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
          message: res.message || 'Request received! Our engineering team will review your report model and reply within 24 business hours.',
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
        message: 'Network error submitting request. Please email contact@nextwebworks.in directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="inquiry-form"
      className="w-full max-w-2xl mx-auto rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 sm:p-10 shadow-xs transition-colors"
    >
      <div className="mb-8 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
          Pilot Rollout
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Request a Staged Pilot Deployment
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
          Interested in giving your leadership conversational access to Power BI reports? Tell us about your reporting environment to discuss a scoped pilot on your test models.
        </p>
      </div>

      {status?.type === 'success' ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-1">
            Pilot Request Submitted
          </h4>
          <p className="text-xs text-slate-600 dark:text-[#94A3B8] font-mono">{status.message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot field for bot protection */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="pbi_hp">Leave empty</label>
            <input
              type="text"
              id="pbi_hp"
              name="website_hp"
              value={formData.website_hp}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status?.type === 'error' && (
            <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-mono text-rose-700 dark:text-rose-300">
              {status.message}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="pbi-name" className="block text-xs font-mono uppercase text-slate-700 dark:text-[#E2E8F0]">
                Your Name <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="text"
                id="pbi-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                placeholder="Jane Doe"
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              />
              {touched.name && !isValidName && (
                <p className="mt-1 text-xs text-rose-500">Please provide your name.</p>
              )}
            </div>

            <div>
              <label htmlFor="pbi-email" className="block text-xs font-mono uppercase text-slate-700 dark:text-[#E2E8F0]">
                Work Email <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="email"
                id="pbi-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                placeholder="jane@company.com"
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              />
              {touched.email && !isValidEmail && (
                <p className="mt-1 text-xs text-rose-500">Please provide a valid work email.</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="pbi-org" className="block text-xs font-mono uppercase text-slate-700 dark:text-[#E2E8F0]">
                Company / Organization
              </label>
              <input
                type="text"
                id="pbi-org"
                name="agencyName"
                value={formData.agencyName}
                onChange={handleChange}
                placeholder="Acme Enterprises"
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              />
            </div>

            <div>
              <label htmlFor="pbi-platform" className="block text-xs font-mono uppercase text-slate-700 dark:text-[#E2E8F0]">
                Power BI Deployment Target
              </label>
              <select
                id="pbi-platform"
                name="scopePlatform"
                value={formData.scopePlatform}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] px-4 py-3 text-sm text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <option value="Power BI Embedded / Custom Visuals">Power BI Embedded (Web Apps)</option>
                <option value="Power BI Service / Desktop Sideload">Power BI Service (Cloud Workspaces)</option>
                <option value="Microsoft Fabric Semantic Models">Microsoft Fabric Lakehouse / Semantic</option>
                <option value="Custom Enterprise Visual Architecture">Custom Visual Architecture</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="pbi-message" className="block text-xs font-mono uppercase text-slate-700 dark:text-[#E2E8F0]">
              Reporting Use Case &amp; Objectives
            </label>
            <textarea
              id="pbi-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the questions leadership asks most often, semantic model size, or compliance requirements..."
              className="mt-2 w-full rounded-lg border border-slate-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] resize-none"
            />
          </div>

          <div className="text-xs text-slate-500 dark:text-[#64748B] leading-relaxed">
            By submitting, you agree to receive follow-up regarding your pilot request. We operate under strict mutual NDA and never disclose client or report data. View our{' '}
            <Link href="/privacy" className="underline hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            .
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] px-6 py-4 text-base font-semibold text-white shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Submitting Request...
              </>
            ) : (
              'Request Pilot Consultation →'
            )}
          </button>
        </form>
      )}
    </div>
  );
}
