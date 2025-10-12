import type { ActionProps } from './Action.types';
import styles from './Action.module.css';

const Action = ({ children }:ActionProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Action;
