import { IconSpinner } from "@lib/icons";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";
import { useMemo } from "react";

function Button({
  type = "button",
  icon,
  label,
  ariaLabel,
  isDisabled,
  isLoading,
  onClick,
  variant,
}: ButtonProps) {
  const loadingColor = useMemo(
    () =>
      variant === "secondary"
        ? "var(--button-text-secondary)"
        : "var(--button-text-primary)",
    [variant]
  );

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      aria-disabled={isDisabled || isLoading}
      className={`${styles.button} ${styles[variant || "primary"]} ${
        isLoading ? styles.loading : ""
      }`}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      {isLoading && (
        <span className={styles.spinner}>
          <IconSpinner stopColor={loadingColor} strokeColor={loadingColor} />
        </span>
      )}
    </button>
  );
}

export default Button;
