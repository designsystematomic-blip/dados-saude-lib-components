import { useState } from "react";
import styles from "./ToggleSwitch.module.css";
import type { ToggleSwitchProps } from "./ToggleSwitch.types";

function ToggleSwitch({
  id,
  ariaLabel = "toggle switch",
  labelId = "toggle-switch-label",
  onToggle,
  label = "",
}: ToggleSwitchProps) {
  const [actived, setActived] = useState<boolean>(false);

  const handleToggle = () => {
    setActived(!actived);
    onToggle();
  };

  return (
    <div>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={actived}
        onChange={handleToggle}
        name={id}
        id={id}
        aria-label={ariaLabel || label}
        aria-labelledby={labelId}
      />
      <label className={styles.label} htmlFor={id} id={labelId}>
        <span className={styles.slider}></span>
        <span>{label}</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
