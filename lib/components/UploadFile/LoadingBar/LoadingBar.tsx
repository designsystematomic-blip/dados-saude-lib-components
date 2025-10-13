import type { LoadingBarProps } from './LoadingBar.types';
import styles from './LoadingBar.module.css';

const LoadingBar = ({ children }:LoadingBarProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default LoadingBar;
