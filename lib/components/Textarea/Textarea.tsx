import { useMemo } from 'react';
import styles from './Textarea.module.css';
import type { TextareaProps } from './Textarea.types';
import toCapitalizeCase from '@lib/utils';

function Textarea ({
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
    variant,
    size,
    color,
    ...props
  }: TextareaProps) {

  const extraClasses = useMemo(() => {
    let classes = "";
    if (size) {
      classes += ` text${toCapitalizeCase(size)}`; // textSmall, textMedium, textLarge
    }

    if (variant) {
      classes += ` font${toCapitalizeCase(variant)}`; // fontPrimary, fontSecondary, fontTertiary
    }

    return classes;
  }, [variant, size]);


    return (
    <div className={styles.container}>
      <label className={`
        ${styles.label}
        ${extraClasses}
      `} htmlFor={id} id={labelId}>
        <span>{label}</span>
      </label>
      <textarea 
        name={id}
        id={id}
        className={`
          ${styles.textArea} 
          ${hasError ? styles.textAreaError : ""}
          ${extraClasses}
        `}
        aria-label={ariaLabel || label}
        aria-labelledby={labelId}
        placeholder={placeholder}
        maxLength={maxTextLength}
        style={{ 
          resize: resize ? 'both' : 'none', 
          height,
          color
        }}
        {...props}
      />
    </div>
  );
}

export default Textarea;