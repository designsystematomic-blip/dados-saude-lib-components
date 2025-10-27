import { useBaseComponent } from '@lib/hooks';
import styles from './Checkbox.module.css';
import type { CheckboxProps } from './Checkbox.types';

function Checkbox ({ 
    id, 
    ariaLabel, 
    label, 
    checked, 
    onChange, 
    disabled, 
    customClassName, 
    fontFamily = 'primary', 
    textSize = 'medium',
    textColor = 'var(--button-text-secondary)'
  }: CheckboxProps) {

    const { extraClasses } = useBaseComponent({
      fontFamily,
      textSize
    })

    return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={id}
        aria-label={ariaLabel}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={`
          ${styles.checkbox} 
          ${checked ? styles.checked : ''} 
          ${disabled ? styles.disabled : ''} 
          ${customClassName || ''}
        `}
      />
      <label htmlFor={id} className={`${styles.label} ${extraClasses}`} style={{ color: textColor }}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;