import styles from './Checkbox.module.css';
import type { CheckboxProps } from './Checkbox.types';

function Checkbox ({ id, ariaLabel, label, checked, onChange, disabled, customClassName, color = 'var(--button-text-secondary)' }: CheckboxProps) {
    return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={id}
        aria-label={ariaLabel}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={`${styles.checkbox} ${checked ? styles.checked : ''} ${disabled ? styles.disabled : ''} ${customClassName || ''}`}
      />
      <label htmlFor={id} className={`${styles.label}`} style={{ color: color }}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;