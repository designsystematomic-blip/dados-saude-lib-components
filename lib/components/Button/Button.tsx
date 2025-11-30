import useBaseComponent from '@lib/hooks/useBaseComponent';
import { IconSpinner } from '@lib/icons';
import { useMemo } from 'react';
import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';

function Button({
  type = 'button',
  iconLeft,
  iconRight,
  label,
  ariaLabel,
  isDisabled,
  isLoading,
  onClick,
  fontFamily = 'primary',
  fontWeight = 'regular',
  textSize = 'medium',
  variant = 'primary',
  customStyles,
}: ButtonProps) {
  const loadingColor = useMemo(
    () =>
      variant === 'secondary'
        ? 'var(--button-text-secondary)'
        : 'var(--button-text-primary)',
    [variant]
  );

  const { extraClasses } = useBaseComponent({
    fontFamily,
    fontWeight,
    textSize,
  });

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      aria-disabled={isDisabled || isLoading}
      className={`
        ${styles.button} 
        ${styles[variant || 'primary']} 
        ${isLoading ? styles.loading : ''} 
        ${extraClasses}
      `}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      style={customStyles}
    >
      {iconLeft && (
        <span className={`${styles.icon} ${styles.iconLeft}`}>{iconLeft}</span>
      )}
      {label && <span className={styles.label}>{label}</span>}
      {iconRight && (
        <span className={`${styles.icon} ${styles.iconRight}`}>
          {iconRight}
        </span>
      )}
      {isLoading && (
        <span className={styles.spinner}>
          <IconSpinner stopColor={loadingColor} strokeColor={loadingColor} />
        </span>
      )}
    </button>
  );
}

export default Button;
