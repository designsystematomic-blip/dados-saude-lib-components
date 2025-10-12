import styles from './VetorialImage.module.css';
import type { VetorialImageProps } from './VetorialImage.types';

function VetorialImage ({ size, svg }: VetorialImageProps) {
    return (
    <div className={styles[size]}>
      {svg}
    </div>
  );
}

export default VetorialImage;