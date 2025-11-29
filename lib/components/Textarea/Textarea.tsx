import useBaseComponent from '@lib/hooks/useBaseComponent';
import styles from './Textarea.module.css';
import type { TextareaProps } from './Textarea.types';

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
      <label
        className={`
        ${styles.label}
        ${extraClasses}
      `}
        htmlFor={id}
        id={labelId}
      >
        <span>{label}</span>
      </label>
      <textarea
        name={id}
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
