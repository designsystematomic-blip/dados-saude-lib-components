import styles from './Wrapper.module.css';
import type { WrapperProps } from './Wrapper.types';

function Wrapper ({ props }: WrapperProps) {
    return (
    <div className={styles.container}>
      Wrapper
    </div>
  );
}

export default Wrapper;