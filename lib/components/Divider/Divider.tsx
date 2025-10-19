import styles from './Divider.module.css';
import type { DividerProps } from './Divider.types';

function Divider ({ thickness, color, borderRight, borderLeft, children }: DividerProps) {
  const leftStyle = {
    ...(thickness ? { height: thickness } : {}),
    ...(color ? { backgroundColor: color } : {}),
  };

  const rightStyle = {
    ...(thickness ? { height: thickness } : {}),
    ...(color ? { backgroundColor: color } : {}),
  };

  return (
    <div className={styles.container}>
      {borderLeft && (
        <div className={styles.left} style={leftStyle}></div>
      )}
      {children && (
        <div>
          {children}
        </div>
      )}
      {borderRight && (
        <div className={styles.right} style={rightStyle}></div>
      )}
    </div>
  );
}

export default Divider;