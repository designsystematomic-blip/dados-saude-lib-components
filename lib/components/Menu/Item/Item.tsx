import type { ItemProps } from './Item.types';
import styles from './Item.module.css';
import useBaseComponent from '@lib/hooks/useBaseComponent';

const Item = ({ iconLeft, iconRight, children, name, fontFamily, textSize, textAlign, color, style }: ItemProps) => {

  const { extraClasses } = useBaseComponent({
    fontFamily,
    textAlign,
    textSize
  });

  return (
    <li 
      className={`${extraClasses} ${styles.item} ${styles.flex} ${styles.spaceBetween}`}
      style={{ 
        ...style,
        color: color ? color : "inherit" 
      }}
    >
      <div className={`${styles.itemGroupOne} ${styles.flex}`}>
        {iconLeft && (<span className={`${styles.icon} ${styles.iconLeft}`}>{iconLeft}</span>)}
        {name && name}
      </div>
      {children && children}
      {iconRight && (<span className={`${styles.icon} ${styles.iconRight}`}>{iconRight}</span>)}
    </li>
  );
};

export default Item;
