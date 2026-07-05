import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ stars, review, name, role, initials }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>{'★'.repeat(stars)}</div>
      <p className={styles.review}>{review}</p>
      <div className={styles.author}>
        <div className={styles.avatar}>{initials}</div>
        <div>
          <h4 className={styles.name}>{name}</h4>
          <span className={styles.role}>{role}</span>
        </div>
      </div>
    </div>
  );
}
