import type { RootProps } from './Root.types';
import styles from './Root.module.css';

const Root = ({ children }:RootProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Root;
