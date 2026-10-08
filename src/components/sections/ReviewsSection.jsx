'use client';

import { useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../../data/staticData';
import TestimonialCard from '../ui/TestimonialCard';
import styles from './ReviewsSection.module.css';

/**
 * ReviewsSection — Reusable reviews / testimonials section
 *
 * Supports both continuous auto-scrolling carousel and responsive grid modes.
 *
 * @param {string} id - HTML anchor ID (default: "reviews")
 * @param {string} eyebrow - Small uppercase label above headline
 * @param {string} title - Main headline string
 * @param {string} titleHighlight - Substring within title to highlight with warm accent
 * @param {string} subtitle - Descriptive paragraph below headline
 * @param {Array} items - Array of testimonial data objects
 * @param {string} layout - "carousel" | "grid" (default: "carousel")
 * @param {boolean} autoScroll - Enable smooth auto-scrolling in carousel mode
 * @param {boolean} centered - Center-align the header
 * @param {string} background - "light" (#FFFFFF) | "texture" (#F8FAF8 with subtle grid)
 */
export default function ReviewsSection({
  id = 'reviews',
  eyebrow = 'CLIENT RESULTS & REVIEWS',
  title = "Don't Just Take Our Word For It",
  titleHighlight = 'Our Word',
  subtitle = 'Hear from ambitious founders and leaders who scaled with Markencia.',
  items = TESTIMONIALS,
  layout = 'carousel',
  autoScroll = true,
  centered = false,
  background = 'light',
  className = '',
}) {
  const scrollerRef = useRef(null);

  // Self-contained smooth infinite scrolling for carousel mode
  useEffect(() => {
    if (layout !== 'carousel' || !autoScroll) return;

    const container = scrollerRef.current;
    if (!container) return;

    let animationFrameId;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += 0.85;
        // Loop back when reaching the end of the first half of duplicated items
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrameId = requestAnimationFrame(scroll);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    const pause = () => { isPaused = true; };
    const resume = () => { isPaused = false; };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('touchstart', pause, { passive: true });
    container.addEventListener('touchend', resume);

    let wheelTimeout;
    const handleWheel = () => {
      pause();
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(resume, 1200);
    };
    container.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
      container.removeEventListener('wheel', handleWheel);
    };
  }, [layout, autoScroll]);

  // Helper to render headline with highlighted phrase
  const renderTitle = () => {
    if (!titleHighlight || !title.includes(titleHighlight)) {
      return title;
    }
    const [before, after] = title.split(titleHighlight);
    return (
      <>
        {before}
        <span className={styles.headingHighlight}>{titleHighlight}</span>
        {after}
      </>
    );
  };

  const displayItems = layout === 'carousel' ? [...items, ...items] : items;

  return (
    <section
      className={[
        styles.section,
        background === 'texture' ? styles.bgTexture : '',
        className,
      ].filter(Boolean).join(' ')}
      id={id}
      aria-label={title}
    >
      <div className={styles.container}>
        {/* ── HEADER ── */}
        <div className={[styles.header, centered ? styles.centered : ''].filter(Boolean).join(' ')}>
          {eyebrow && (
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDash} aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>
          )}

          <h2 className={styles.heading}>{renderTitle()}</h2>

          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {/* ── CONTENT (CAROUSEL OR GRID) ── */}
        {layout === 'carousel' ? (
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer} ref={scrollerRef}>
              {displayItems.map((testimonial, idx) => (
                <div key={`${testimonial.id || idx}-${idx}`} className={styles.carouselItem}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.gridContainer}>
            {displayItems.map((testimonial, idx) => (
              <TestimonialCard key={testimonial.id || idx} {...testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export { ReviewsSection as TestimonialsSection };
