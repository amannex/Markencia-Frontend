// ============================================================
// TableOfContents.jsx
// Sidebar widget that renders a navigable list of article headings.
// The active heading (the one currently in the viewport) is
// highlighted via the `activeId` prop from useTableOfContents.
//
// Props:
//   headings    {TocItem[]} — [{id, text, level}] from useTableOfContents.
//   activeId    {string}    — id of the heading currently in view.
//   onItemClick {Function}  — scrollToHeading(id) from useTableOfContents.
// ============================================================

import styles from './TableOfContents.module.css';

export default function TableOfContents({ headings = [], activeId, onItemClick }) {
  if (!headings.length) return null;

  return (
    <nav className={styles.widget} aria-label="Table of contents">
      <p className={styles.heading}>On this page</p>

      <ol className={styles.list}>
        {headings.map(({ id, text, level }) => {
          const isActive = id === activeId;
          const isH3    = level === 3;

          return (
            <li
              key={id}
              className={`${styles.item} ${isH3 ? styles.itemH3 : ''}`}
            >
              {/* Use a button so keyboard users can trigger scroll-to */}
              <button
                type="button"
                onClick={() => onItemClick(id)}
                className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                aria-current={isActive ? 'location' : undefined}
                aria-label={`Jump to: ${text}`}
              >
                {text}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
