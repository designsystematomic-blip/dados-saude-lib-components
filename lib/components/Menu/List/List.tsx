import type { ListProps } from './List.types';
import styles from './List.module.css';

const List = ({ children, listStyle = 'noBullet', direction, style }: ListProps) => {

  return <ul 
    className={`
      ${styles[listStyle]} 
      ${styles.list}
      ${styles[direction]}
    `}
    style={style}
  >
    {children}
  </ul>;
};

export default List;
