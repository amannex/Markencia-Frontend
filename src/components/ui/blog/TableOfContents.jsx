// ============================================================
// TableOfContents.jsx
// Sidebar widget that renders a navigable list of article headings.
// Includes open/close toggle functionality and displays the active
// topic even when collapsed.
//
// Props:
//   headings    {TocItem[]} — [{id, text, level}] from useTableOfContents.
//   activeId    {string}    — id of the heading currently in view.
//   onItemClick {Function}  — scrollToHeading(id) from useTableOfContents.
// ============================================================

import { useState, useEffect, useRef } from 'react';
import styles from './TableOfContents.module.css';

export default function TableOfContents({ headings = [], activeId, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeRef = useRef(null);

  useEffect(() => {
    if (isOpen && activeRef.current && typeof activeRef.current.scrollIntoView === 'function') {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeId, isOpen]);

  if (!headings.length) return null;

  const activeHeading = headings.find((h) => h.id === activeId) || headings[0];

  return (
    <nav className={styles.widget} aria-label="Table of contents">
      <div className={`${styles.header} ${!isOpen ? styles.headerClosed : ''}`}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.headerButton}
          aria-expanded={isOpen}
          aria-controls="toc-list"
          aria-label="Toggle Table of Contents"
        >
          <div className={styles.headerLeft}>
            <span className={styles.headerIcon} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </span>
            <p className={styles.headingText}>On this page</p>
          </div>

          <span
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : styles.chevronClosed}`}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
      </div>

      {isOpen ? (
        <ol id="toc-list" className={styles.list}>
          {headings.map(({ id, text, level }) => {
            const isActive = id === activeId;
            const isH3 = level === 3;

            return (
              <li
                key={id}
                ref={isActive ? activeRef : null}
                className={`${styles.item} ${isH3 ? styles.itemH3 : ''}`}
              >
                <button
                  type="button"
                  onClick={() => onItemClick(id)}
                  className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                  aria-label={`Jump to: ${text}`}
                >
                  <span className={styles.text}>{text}</span>
                  {isActive && (
                    <span
                      className={styles.activeDot}
                      aria-label="Current topic"
                      title="Currently reading this section"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      ) : (
        activeHeading && (
          <div
            className={styles.collapsedActive}
            onClick={() => setIsOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsOpen(true);
              }
            }}
            aria-label={`Currently reading: ${activeHeading.text}. Click to expand table of contents.`}
            title="Click to expand Table of Contents"
          >
            <span className={styles.activeDotMini} aria-hidden="true" />
            <span className={styles.collapsedText}>{activeHeading.text}</span>
          </div>
        )
      )}
    </nav>
  );
}
