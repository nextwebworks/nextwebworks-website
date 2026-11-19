// section: poc-pbi-inquiry
import PbiInquiryForm from '../PbiInquiryForm.js';

export default function PbiInquirySection() {
  return (
    <section
      id="inquiry"
      data-section="poc-pbi-inquiry"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PbiInquiryForm />
      </div>
    </section>
  );
}
