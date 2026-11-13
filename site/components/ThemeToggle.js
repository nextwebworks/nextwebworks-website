'use client';

import { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

const subscribe = (callback) => {
  window.addEventListener('storage', callback);
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => {
    window.removeEventListener('storage', callback);
    observer.disconnect();
  };
};

const getSnapshot = () => {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

const getServerSnapshot = () => 'light';

export default function ThemeToggle({ className = '' }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('nww-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('nww-theme', 'light');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-100 dark:bg-[#0F172A] text-slate-700 dark:text-[#94A3B8] hover:text-[#2563EB] dark:hover:text-white hover:border-[#2563EB]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700" aria-hidden="true" />
      )}
    </button>
  );
}
