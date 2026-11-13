'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo.js';
import { submitLead } from '@/app/actions/lead.js';
import { getWhatsAppHref } from './WhatsAppButton.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail) return;

    setLoading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('formType', 'newsletter');
    formData.append('source', 'website-footer');
    // Honeypot field left empty
    formData.append('website_hp', '');

    try {
      const res = await submitLead(formData);
      if (res.success) {
        setStatus({ type: 'success', message: res.message || "You're subscribed!" });
        setEmail('');
        setTouched(false);
      } else {
        setStatus({ type: 'error', message: res.error || 'Subscription failed. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Unable to subscribe right now. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const href = getWhatsAppHref('footer');
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="border-t border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] text-slate-600 dark:text-[#94A3B8] transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Col 1: Brand & Positioning */}
          <div className="space-y-4">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded">
              <Logo />
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
              White-label engineering partner for marketing agencies. We build client websites, web apps, and mobile
              platforms under your brand with fixed quotes and zero agency overhead.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center rounded-full bg-slate-200/80 dark:bg-[#0F172A] border border-slate-300 dark:border-[#1E293B] px-3 py-1 text-xs font-mono text-slate-800 dark:text-[#E2E8F0]">
                Mon–Fri · 10:00 AM – 7:00 PM IST
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <p className="text-sm font-semibold tracking-wider text-slate-900 dark:text-[#F8FAFC] uppercase font-mono">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150">
                  Services & Specs
                </Link>
              </li>
              <li>
                <Link href="/for-agencies" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150">
                  For Agencies & Models
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150">
                  Illustrative Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150">
                  About & Founder
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150">
                  Send a Brief
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Conversion & Legal */}
          <div>
            <p className="text-sm font-semibold tracking-wider text-slate-900 dark:text-[#F8FAFC] uppercase font-mono">
              Connect & Legal
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/book-a-call" className="text-[#2563EB] dark:text-[#3B82F6] hover:underline font-medium transition-colors">
                  Book a 30-Min Call →
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/917999934815"
                  onClick={handleWhatsAppClick}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Signup */}
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wider text-slate-900 dark:text-[#F8FAFC] uppercase font-mono">
              The Agency Digest
            </p>
            <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
              Tactical white-label engineering breakdowns for agency operators. 2 posts a month at most. Zero fluff.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder="agency@example.com"
                  className="w-full rounded-lg bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-[#1E293B] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:border-transparent transition-colors"
                  aria-label="Email address for newsletter"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors disabled:opacity-50"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>

              {/* Inline validation after touch */}
              {touched && !isValidEmail && email.length > 0 && (
                <p className="text-xs text-rose-500">Please enter a valid email address.</p>
              )}

              {/* Status alerts */}
              {status && (
                <p className={`text-xs ${status.type === 'success' ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {status.message}
                </p>
              )}

              {/* Consent notice */}
              <p className="text-xs text-slate-500 dark:text-[#64748B] leading-relaxed">
                We&apos;ll email you new articles. Unsubscribe any time.{' '}
                <Link href="/privacy" className="underline hover:text-slate-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-200 dark:border-[#1E293B]/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-[#64748B]">
          <p>
            Next Web Works is a proprietary engineering consultancy operated by Devansh Khetwani (Sole Proprietor). All rights reserved.
          </p>
          <p className="font-mono">© 2026 Next Web Works</p>
        </div>
      </div>
    </footer>
  );
}
