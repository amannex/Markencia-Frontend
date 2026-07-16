import styles from './Button.module.css';

/**
 * Button — supports primary, secondary, outline & ctaButton variants
 * @param {'primary'|'secondary'|'outline'|'ctaButton'} variant
 */
export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  href,
  fullWidth = false,
  className = '',
  ...rest
}) {
  const classes = [
    styles.btn,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
