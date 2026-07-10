// ============================================================
// useReadingTime.js
// ============================================================
import { useMemo } from 'react';

const DEFAULT_WPM = 238;

export function useReadingTime(content = '', { wordsPerMinute = DEFAULT_WPM } = {}) {
  return useMemo(() => {
    if (!content || typeof content !== 'string') {
      return { minutes: 0, wordCount: 0, text: '0 min read' };
    }

    const plainText = content.replace(/<[^>]+>/g, ' ');
    const words = plainText.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

    return {
      minutes,
      wordCount,
      text: `${minutes} min read`,
    };
  }, [content, wordsPerMinute]);
}
