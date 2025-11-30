import { IconCancel, IconEye } from "@lib/icons";
import { useMemo, useState, useId } from "react";
import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

function Input({
  id,
  name,
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
  
  // Gerar IDs únicos usando React 18 useId hook
  const reactId = useId();
  
  // Garantir que IDs sejam sempre únicos, mesmo se passados via props
  const inputId = name;
  const inputName = name || inputId; // Se name não for fornecido, usa o inputId
  const labelElementId = labelId ? `${labelId}-${reactId}` : `label-${reactId}`;
  const descriptionId = description ? `description-${reactId}` : undefined;

  const inputType = useMemo(() => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  }, [type, showPassword]);

  return (
    <div className={styles.container + " " + styles.inputGroup}>
      <div className={styles.inputContainer}>
        {showLabel && (
          <label className={styles.label} htmlFor={id} id={labelElementId}>
            <span>{label}</span>
          </label>
        )}
        <input
          className={`${styles.input} ${hasError ? styles.inputError : ""}`}
          type={inputType}
          name={inputName}
          id={id}
          aria-label={!showLabel ? ariaLabel || label : undefined}
          aria-describedby={descriptionId}
          placeholder={placeholder}
          maxLength={maxTextLength}
          style={{ height }}
          autoComplete="off"
          {...props}
        />
        {hasError && type !== 'date' && (
          <button 
            type="button" 
            aria-label={`Limpar ${label}`}
            className={styles.buttonClear} 
            onClick={handleClear}
          >
            <IconCancel fillColor="var(--color-text-error)" />
          </button> 
        )}
        {!hasError && type === "password" && (
          <button
            type="button"
            aria-label={showPassword ? `Ocultar ${label}` : `Mostrar ${label}`}
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
            className={styles.buttonProtect}
          >
            <IconEye />
          </button>
        )}
      </div>
      {description && (
        <span className={styles.description} id={descriptionId}>
          {description}
        </span>
      )}
    </div>
  );
}

export default Input;

export function InputError({ children }: React.PropsWithChildren) {
  const errorId = useId();
  
  return (
    <p className={styles.error} role="alert" id={`error-${errorId}`}>
      {children}
    </p>
  );
}