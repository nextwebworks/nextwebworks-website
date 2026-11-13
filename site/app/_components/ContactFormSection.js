// section: home-s8-contact-form
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { submitLead } from '@/app/actions/lead.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function ContactFormSection({ content }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agencyName: '',
    scopePlatform: 'Next.js App Router',
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
    data.append('source', 'homepage-bottom-contact-form');

    try {
      const res = await submitLead(data);
      if (res.success) {
        setStatus({
          type: 'success',
          message: res.message || 'Brief received! We will review and reply within 24 business hours.',
        });
        setFormData({ name: '', email: '', agencyName: '', scopePlatform: 'Next.js App Router', message: '', website_hp: '' });
        setTouched({});
      } else {
        setStatus({ type: 'error', message: res.error || 'Submission failed. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Unable to submit your brief right now. Please email us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-section={content?.sectionId || 'home-s8-contact-form'}
      className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] transition-colors scroll-mt-16 relative"
    >
      <div id="home-s8-contact-form" className="absolute -top-16 left-0" aria-hidden="true" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="text-center space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-semibold">
            {content.eyebrow || 'Inbound Brief'}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {content.leadIn}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            {content.description}
          </p>
        </MotionFadeIn>

        <MotionFadeIn y={24} delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-12 space-y-6" noValidate>
            {/* Honeypot field (hidden from screen readers & users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_hp">Leave empty</label>
              <input type="text" id="website_hp" name="website_hp" value={formData.website_hp} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-700 dark:text-[#E2E8F0]">
                  Your Name <span className="text-[#2563EB]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  placeholder="Sarah Jenkins"
                  className="mt-2 w-full rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  required
                />
                {touched.name && !isValidName && <p className="mt-1 text-xs text-rose-500">Please provide your name.</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-700 dark:text-[#E2E8F0]">
                  Agency Work Email <span className="text-[#2563EB]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  placeholder="sarah@growthagency.com"
                  className="mt-2 w-full rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  required
                />
                {touched.email && !isValidEmail && <p className="mt-1 text-xs text-rose-500">Please provide a valid work email.</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="agencyName" className="block text-xs font-mono uppercase text-slate-700 dark:text-[#E2E8F0]">
                  Agency Name / Website
                </label>
                <input
                  type="text"
                  id="agencyName"
                  name="agencyName"
                  value={formData.agencyName}
                  onChange={handleChange}
                  placeholder="Apex Creative · apexcreative.co"
                  className="mt-2 w-full rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                />
              </div>

              <div>
                <label htmlFor="scopePlatform" className="block text-xs font-mono uppercase text-slate-700 dark:text-[#E2E8F0]">
                  Target Platform / Stack
                </label>
                <select
                  id="scopePlatform"
                  name="scopePlatform"
                  value={formData.scopePlatform}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-4 py-3 text-sm text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <option value="Next.js App Router">Next.js App Router / Custom Web App</option>
                  <option value="WordPress Custom Theme">WordPress / WooCommerce</option>
                  <option value="Webflow / Wix Studio">Webflow / Wix Studio</option>
                  <option value="React Native Mobile">React Native Mobile App</option>
                  <option value="Full ERP / Internal Portal">Operations ERP / Portal</option>
                  <option value="Other / Multiple Stacks">Other / Multi-Platform Build</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-700 dark:text-[#E2E8F0]">
                Brief Overview & Target Launch Date
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about the project, Figma availability, client requirements, and approximate timeline..."
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              />
            </div>

            <div className="text-xs text-slate-500 dark:text-[#64748B] leading-relaxed">
              By submitting, you agree to receive communications regarding your brief. We operate under strict mutual NDA
              and never share client details. View our{' '}
              <Link href="/privacy" className="underline hover:text-slate-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              .
            </div>

            {status && (
              <div
                className={`rounded-lg p-4 text-xs font-mono ${
                  status.type === 'success'
                    ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'
                    : 'border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-300'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#2563EB] px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors disabled:opacity-50"
            >
              {loading ? 'Submitting Brief...' : 'Send Agency Brief →'}
            </button>
          </form>
        </MotionFadeIn>
      </div>
    </section>
  );
}
