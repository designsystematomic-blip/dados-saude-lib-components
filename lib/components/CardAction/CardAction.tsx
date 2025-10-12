import toCapitalizeCase from '@lib/utils';
import styles from './CardAction.module.css';
import type { CardActionProps } from './CardAction.types';
import { useMemo } from 'react';

function CardAction ({ label, icon, onClick, variant, size, isDisabled }: CardActionProps) {
  const extraClasses = useMemo(() => {
    let classes = "";
    if (size) {
      classes += ` text${toCapitalizeCase(size)}`; // textSmall, textMedium, textLarge
    }

    if (variant) {
      classes += ` font${toCapitalizeCase(variant)}`; // fontPrimary, fontSecondary, fontTertiary
    }

    return classes;
  }, [variant, size]);
  return (
    <button type="button" onClick={onClick} disabled={isDisabled} className={`${styles.buttonCard} ${extraClasses}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
}

export default CardAction;