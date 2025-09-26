import { IconClose } from "@lib/icons";
import styles from "./Snackbar.module.css";
import type { SnackbarProps } from "./Snackbar.types";

function Snackbar({ content, type, isOpen, onClose }: SnackbarProps) {
  const contentType = typeof content;

  return (
    <div
      className={`${styles.snackbar} ${styles[type]} ${isOpen && styles.show}`}
    >
      {contentType === "string" ? <p>{content}</p> : content}
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        name="close"
        aria-label="close"
      >
        <IconClose fillColor="var(--color-primary)" />
      </button>
    </div>
  );
}

export default Snackbar;
