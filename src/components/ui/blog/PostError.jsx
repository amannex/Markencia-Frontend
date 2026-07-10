// ============================================================
// PostError.jsx
// Displayed when a blog post cannot be found (404) or when
// the API returns an error. Provides a clear recovery path.
// Props:
//   message {string|null} — Optional error detail from the API.
// ============================================================

import { Link } from 'react-router-dom';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function PostError({ message }) {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[72vh] text-center px-6 py-24 gap-8"
      aria-live="polite"
      role="alert"
    >
      {/* Icon */}
      <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">
        <FileQuestion size={40} className="text-slate-400" aria-hidden="true" />
      </div>

      {/* Copy */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Article Not Found
        </h1>
        <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
          {message || "The article you're looking for doesn't exist or may have been moved."}
        </p>
      </div>

      {/* Recovery CTA */}
      <Link
        to="/blogs"
        className="
          inline-flex items-center gap-2 px-7 py-3.5
          bg-[#003818] text-white font-semibold rounded-full
          transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003818]
        "
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Journal
      </Link>
    </section>
  );
}
