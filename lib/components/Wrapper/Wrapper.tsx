import styles from "./Wrapper.module.css";
import type { WrapperProps } from "./Wrapper.types";

function Wrapper({ children }: WrapperProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Wrapper;
