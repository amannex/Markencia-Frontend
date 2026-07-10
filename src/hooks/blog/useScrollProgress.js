// ============================================================
// useScrollProgress.js
// ============================================================
import { useState, useEffect, useRef } from 'react';

export function useScrollProgress(containerRef) {
  const [progress, setProgress] = useState(0);
  const rafPending = useRef(false);

  useEffect(() => {
    const target = containerRef?.current ?? window;

    function calculateProgress() {
      rafPending.current = false;
      let scrollTop;
      let scrollHeight;
      let clientHeight;

      if (target === window) {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollHeight = document.documentElement.scrollHeight;
        clientHeight = document.documentElement.clientHeight;
      } else {
        scrollTop = target.scrollTop;
        scrollHeight = target.scrollHeight;
        clientHeight = target.clientHeight;
      }

      const scrollable = scrollHeight - clientHeight;
      if (scrollable <= 0) {
        setProgress(100);
        return;
      }

      const percentage = Math.min(100, Math.max(0, (scrollTop / scrollable) * 100));
      setProgress(percentage);
    }

    function handleScroll() {
      if (rafPending.current) return;
      rafPending.current = true;
      requestAnimationFrame(calculateProgress);
    }

    calculateProgress();
    target.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      target.removeEventListener('scroll', handleScroll);
      rafPending.current = false;
    };
  }, [containerRef]);

  return progress;
}
