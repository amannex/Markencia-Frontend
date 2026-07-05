import { useState, useEffect, useRef } from 'react';
import { getPosts } from '../services/wpApi';

/**
 * Custom hook to fetch and cache WordPress posts.
 * Falls back gracefully — the consumer can use staticData as fallback.
 *
 * @param {Object} params - WP REST API query params (per_page, categories, etc.)
 * @returns {{ posts, loading, error }}
 */
export function useWordPressPosts(params = {}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Stable key for params to avoid infinite re-renders
  const paramsKey = JSON.stringify(params);
  const prevKey = useRef(null);

  useEffect(() => {
    if (prevKey.current === paramsKey) return;
    prevKey.current = paramsKey;

    let cancelled = false;
    setLoading(true);
    setError(null);

    getPosts(params)
      .then((data) => {
        if (!cancelled) {
          setPosts(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [paramsKey]);

  return { posts, loading, error };
}
