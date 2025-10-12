import type { ItemProps } from './Item.types';
import styles from './Item.module.css';
import { useMemo } from 'react';
import toCapitalizeCase from '@lib/utils';

const Item = ({ iconLeft, iconRight, children, name, align, size, variant, color, style }: ItemProps) => {

  const extraClasses = useMemo(() => {
    let classes = "";
    if (align) {
      classes += ` text${toCapitalizeCase(align)}`; // textLeft, textCenter, textRight
    }

    if (size) {
      classes += ` text${toCapitalizeCase(size)}`; // textSmall, textMedium, textLarge
    }

    if (variant) {
      classes += ` font${toCapitalizeCase(variant)}`; // fontPrimary, fontSecondary, fontTertiary
    }

    return classes;
  }, [variant, align]);

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
