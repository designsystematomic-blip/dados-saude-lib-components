import { IconCancel, IconEye } from "@lib/icons";
import { useMemo, useState } from "react";
import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

function Input({
  id = "id-input",
  ariaLabel,
  labelId,
  label = "label",
  showLabel = true,
  placeholder = "",
  description = "",
  height = '42px',
  type = "text",
  maxTextLength,
  hasError = false,
  handleClear,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const test = props;

  console.log(test);

  const inputType = useMemo(() => {

    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;

  },[type, showPassword]);

  return (
    <div className={styles.container + " " + styles.inputGroup}>
      {showLabel && (
        <label className={styles.label} htmlFor={id} id={labelId}>
          <span>{label}</span>
        </label>
      )}
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${hasError ? styles.inputError : ""}`}
          type={inputType}
          name={id}
          id={id}
          aria-label={ariaLabel || label}
          aria-labelledby={labelId}
          placeholder={placeholder}
          maxLength={maxTextLength}
          style={{ height }}
          {...props}
        />
        {hasError && type !== 'date' && (
          <button type="button" aria-label="clear input" className={styles.buttonClear} onClick={handleClear}>
            <IconCancel fillColor="var(--color-text-error)" />
          </button> 
        )}
        {!hasError && type === "password" && (
          <button
            type="button"
            aria-label="toggle password visibility"
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
            className={styles.buttonProtect}
          >
            <IconEye />
          </button>
        )}
      </div>
      {description && <span className={styles.description}>{description}</span>}
    </div>
  );
}

export default Input;

export function InputError({ children }: React.PropsWithChildren) {
  return (
    <p className={styles.error} role="alert">
      {children}
    </p>
  );
}
