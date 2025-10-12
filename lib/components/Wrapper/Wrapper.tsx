import styles from "./Wrapper.module.css";
import type { WrapperProps } from "./Wrapper.types";

function Wrapper({ children, style }: WrapperProps) {
  return <div className={styles.container} style={style}>{children}</div>;
}

export default Wrapper;
