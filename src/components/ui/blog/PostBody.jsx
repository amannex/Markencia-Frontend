// ============================================================
// PostBody.jsx
// Renders the processed article HTML using Tailwind Typography
// (prose) classes for rich typographic styling.
// ============================================================

import styles from './PostBody.module.css';

export default function PostBody({ content, ctaNode, injectAfterParagraph = 3 }) {
  if (!content) return null;

  if (!ctaNode) {
    return (
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Find the Nth occurrence of </p>
  let splitIndex = -1;
  let pCount = 0;
  
  const regex = /<\/p>/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    pCount++;
    if (pCount === injectAfterParagraph) {
      splitIndex = match.index + 4; // length of </p>
      break;
    }
  }

  // If fewer paragraphs than the injection point, fallback to appending at the end
  if (splitIndex === -1) {
    splitIndex = content.length;
  }

  const part1 = content.substring(0, splitIndex);
  const part2 = content.substring(splitIndex);

  return (
    <>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: part1 }}
      />
      <div style={{ margin: '3rem 0' }}>
        {ctaNode}
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: part2 }}
      />
    </>
  );
}
