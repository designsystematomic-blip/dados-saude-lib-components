import styles from './Image.module.css';
import type { ImageProps } from './Image.types';

function Image ({ src, size, alt, srcSet }: ImageProps) {
    return (
    <div className={styles[size]}>
      <img src={src} alt={alt} {...(srcSet ? { srcSet } : {})} />
    </div>
  );
}

export default Image;

