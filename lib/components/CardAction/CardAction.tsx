import styles from './CardAction.module.css';
import type { CardActionProps } from './CardAction.types';
import useBaseComponent from '@lib/hooks/useBaseComponent';

function CardAction ({ label, icon, onClick, fontFamily, textSize, isDisabled }: CardActionProps) {

  const { extraClasses } = useBaseComponent( {
    fontFamily,
    textSize
  });

  return (
    <button type="button" onClick={onClick} disabled={isDisabled} className={`${styles.buttonCard} ${extraClasses}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
}

export default CardAction;