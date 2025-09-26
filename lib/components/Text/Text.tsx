import styles from "./Text.module.css";
import type { TextProps } from "./Text.types";

function Text({ content }: TextProps) {
  return <p className={styles.container}>{content}</p>;
}

export default Text;
