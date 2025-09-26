import { useMemo } from "react";
import styles from "./Tag.module.css";
import type { TagProps } from "./Tag.types";

function Tag({ label, variant = "default" }: TagProps) {
  return (
    <div className={`${styles.tagContainer} ${styles[variant]}`}>
      <span>{label}</span>
    </div>
  );
}

export default Tag;
