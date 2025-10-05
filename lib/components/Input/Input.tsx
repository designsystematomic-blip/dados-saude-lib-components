import { IconEye } from "@lib/icons";
import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";
import { useState } from "react";

function Input({
  id = "id-input",
  ariaLabel,
  labelId,
  label = "label",
  placeholder = "",
  description = "",
  value,
  handleOnChange,
  height = 42,
  type = "text",
  maxTextLength,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  console.log("showPassword", showPassword);

  const inputType = type === "password" && !showPassword ? "password" : "text";

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id} id={labelId}>
        <span>{label}</span>
      </label>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type={inputType}
          name={id}
          id={id}
          aria-label={ariaLabel || label}
          aria-labelledby={labelId}
          placeholder={placeholder}
          maxLength={maxTextLength}
          style={{ height: `${height}px` }}
          value={value}
          onChange={handleOnChange}
        />
        {type === "password" && (
          <button
            type="button"
            aria-label="toggle password visibility"
            onClick={() => {
              setShowPassword((prev) => !prev);
              console.log("clicou");
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
