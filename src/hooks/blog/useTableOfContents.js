// ============================================================
// useTableOfContents.js
// ============================================================
import { useState, useEffect, useMemo, useCallback } from 'react';

const HEADING_LEVELS = ['h2', 'h3'];

function toSlugId(text, index) {
  const stripped = (text || '').replace(/<[^>]+>/g, '').trim();
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
    /<(h[23])(\s[^>]*)?>([\s\S]*?)<\/\1>/gi,
    (match, tag, attrs = '', innerText) => {
      const heading = headings[headingIndex++];
      if (!heading) return match;
      const cleanAttrs = attrs.replace(/\s+id=["'][^"']*["']/i, '');
      return `<${tag}${cleanAttrs} id="${heading.id}">${innerText}</${tag}>`;
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
    if (!headings.length) return;

    setActiveId((prev) => prev || headings[0].id);

    let ticking = false;
    const updateActiveHeading = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (!headings.length) return;

        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // If scrolled to bottom of document, highlight the last heading
        if (scrollY + windowHeight >= documentHeight - 30) {
          setActiveId(headings[headings.length - 1].id);
          return;
        }

        const activationOffset = 140;
        let currentActiveId = headings[0].id;

        for (const heading of headings) {
          const el = document.getElementById(heading.id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          if (rect.top <= activationOffset) {
            currentActiveId = heading.id;
          } else {
            break;
          }
        }

        setActiveId(currentActiveId);
      });
    };

    updateActiveHeading();
    const t1 = setTimeout(updateActiveHeading, 50);
    const t2 = setTimeout(updateActiveHeading, 150);
    const t3 = setTimeout(updateActiveHeading, 350);

    window.addEventListener('scroll', updateActiveHeading, { passive: true });
    window.addEventListener('resize', updateActiveHeading, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('scroll', updateActiveHeading);
      window.removeEventListener('resize', updateActiveHeading);
    };
  }, [headings]);

  const scrollToHeading = useCallback((id, offset = 100) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveId(id);
  }, []);

  return { headings, activeId, scrollToHeading };
}
