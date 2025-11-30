import styles from './Textarea.module.css';
import type { TextareaProps } from './Textarea.types';
import useBaseComponent from '@lib/hooks/useBaseComponent';

function Textarea({
  ariaLabel,
  id,
  resize,
  hasError = false,
  height,
  label,
  labelId,
  maxTextLength,
  placeholder,
  style,
  fontFamily,
  textSize,
  color,
  ...props
}: TextareaProps) {
  const { extraClasses } = useBaseComponent({
    fontFamily,
    textSize,
  });

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={`
        ${styles.label}
        ${extraClasses}
      `}>
        <span>{label}</span>
      </label>
      <textarea 
        name={ariaLabel}
        id={id}
        className={`
          ${styles.textArea} 
          ${hasError ? styles.textAreaError : ''}
          ${extraClasses}
        `}
        aria-label={ariaLabel || label}
        aria-labelledby={labelId}
        placeholder={placeholder}
        maxLength={maxTextLength}
        style={{
          resize: resize ? 'both' : 'none',
          height,
          color,
        }}
        {...props}
      />
    </div>
  );
}

export default Textarea;
