// ============================================================
// PostBody.jsx
// Renders the processed article HTML using Tailwind Typography
// (prose) classes for rich typographic styling.
// ============================================================

export default function PostBody({ content }) {
  if (!content) return null;

  return (
    <div
      // Tailwind Typography prose classes for rich content rendering.
      className="
        prose prose-lg max-w-none
        prose-headings:text-slate-900 prose-headings:font-bold
        prose-headings:scroll-mt-24
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-slate-600 prose-p:leading-[1.85]
        prose-a:text-[#003818] prose-a:font-semibold prose-a:no-underline
        hover:prose-a:underline
        prose-strong:text-slate-900
        prose-blockquote:not-italic prose-blockquote:font-normal
        prose-blockquote:border-l-[4px] prose-blockquote:border-[#FFB400]
        prose-blockquote:bg-[#F8FAFC] prose-blockquote:rounded-r-2xl
        prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:text-slate-700
        prose-li:text-slate-600 prose-li:leading-relaxed
        prose-code:text-[#003818] prose-code:bg-slate-100
        prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
        prose-pre:bg-slate-900 prose-pre:rounded-2xl prose-pre:text-sm
        prose-img:rounded-2xl prose-img:shadow-lg
      "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
