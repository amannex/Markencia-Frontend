// ============================================================
// useTableOfContents.js
// ============================================================
import { useState, useEffect, useMemo } from 'react';

const HEADING_LEVELS = ['h2', 'h3'];
const ROOT_MARGIN = '-80px 0px -60% 0px';

function toSlugId(text, index) {
  const stripped = text.replace(/<[^>]+>/g, '').trim();
  const slug = stripped
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');

  return slug || `heading-${index}`;
}

export function injectHeadingIds(html, headings) {
  if (!html || !headings?.length) return html;
  let headingIndex = 0;

  return html.replace(
    /<(h[23])(\s[^>]*)?>([^<]*(?:<(?!\/h[23]>)[^<]*)*)<\/h[23]>/gi,
    (match, tag, attrs = '', innerText) => {
      if (/id\s*=/i.test(attrs)) return match;
      const heading = headings[headingIndex++];
      if (!heading) return match;
      return `<${tag}${attrs} id="${heading.id}">${innerText}</${tag}>`;
    },
  );
}

export function useTableOfContents({ htmlContent, containerRef, levels = HEADING_LEVELS } = {}) {
  const [activeId, setActiveId] = useState('');
  const [domHeadings, setDomHeadings] = useState([]);

  const parsedHeadings = useMemo(() => {
    if (containerRef || !htmlContent) return [];
    const selector = levels.join('|');
    const regex = new RegExp(`<(${selector})(?:\\s[^>]*)?>([\\s\\S]*?)<\\/\\1>`, 'gi');
    const items = [];
    let match;
    let index = 0;

    while ((match = regex.exec(htmlContent)) !== null) {
      const level = parseInt(match[1].replace('h', ''), 10);
      const rawText = match[2];
      const text = rawText.replace(/<[^>]+>/g, '').trim();
      const id = toSlugId(text, index);
      items.push({ id, text, level });
      index++;
    }
    return items;
  }, [htmlContent, containerRef, levels]);

  useEffect(() => {
    if (!containerRef?.current) return;
    const selector = levels.join(', ');
    const elements = Array.from(containerRef.current.querySelectorAll(selector));
    const items = elements.map((el, index) => {
      const text = el.textContent?.trim() || '';
      const level = parseInt(el.tagName.replace('H', ''), 10);
      if (!el.id) {
        el.id = toSlugId(text, index);
      }
      return { id: el.id, text, level };
    });
    setDomHeadings(items);
  }, [containerRef, levels]);

  const headings = containerRef ? domHeadings : parsedHeadings;

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const topmost = visible.reduce((prev, cur) =>
          prev.target.getBoundingClientRect().top < cur.target.getBoundingClientRect().top ? prev : cur
        );
        setActiveId(topmost.target.id);
      },
      { rootMargin: ROOT_MARGIN, threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  function scrollToHeading(id, offset = 88) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return { headings, activeId, scrollToHeading };
}
