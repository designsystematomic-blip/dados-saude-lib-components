import type { ActionProps } from "./Action.types";
import styles from "./Action.module.css";

const Action = ({ icon, onClick, name, label, ariaLabel }: ActionProps) => {
  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={onClick}
        className={styles.button}
        name={name}
        aria-label={ariaLabel}
      >
        {icon}
        {label && <span>{label}</span>}
      </button>
    </div>
  );
};

export default Action;
