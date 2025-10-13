import type { StateProps } from './State.types';
import styles from './State.module.css';

const State = ({ children }:StateProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default State;
