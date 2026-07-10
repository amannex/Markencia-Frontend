// ============================================================
// useCopyLink.js
// ============================================================
import { useState, useEffect, useCallback, useRef } from 'react';

const DEFAULT_RESET_DELAY_MS = 2500;

export function useCopyLink({ url, resetDelay = DEFAULT_RESET_DELAY_MS } = {}) {
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);
  const [error, setError] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function legacyCopy(text) {
    const textarea = document.createElement('textarea');
    Object.assign(textarea.style, {
      position: 'fixed',
      top: '-9999px',
      left: '-9999px',
      opacity: '0',
      pointerEvents: 'none',
    });
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    if (!success) throw new Error('execCommand copy failed.');
  }

  const copy = useCallback(async (overrideUrl) => {
    const target = overrideUrl ?? url ?? window.location.href;
    if (copying) return;

    setCopying(true);
    setError(null);

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(target);
      } else {
        legacyCopy(target);
      }
      setCopied(true);
      timerRef.current = setTimeout(() => setCopied(false), resetDelay);
    } catch (err) {
      setError(err.message || 'Failed to copy to clipboard.');
      setCopied(false);
    } finally {
      setCopying(false);
    }
  }, [copying, url, resetDelay]);

  return { copied, copying, error, copy };
}
