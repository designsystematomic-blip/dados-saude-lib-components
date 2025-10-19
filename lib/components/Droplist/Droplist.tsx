import { IconChevronDown } from '@lib/icons';
import Text from '../Text';
import styles from './Droplist.module.css';
import type { DroplistProps, Items } from './Droplist.types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Title from '../Title';
import toCapitalizeCase from '@lib/utils';
import useBaseComponent from '@lib/hooks/useBaseComponent';

function Droplist ({ 
  label,
  name,
  placeholder,
  listTitle,
  list,
  handleSelectItem,
  customClassName, 
  width,
  fontFamily,
  textSize
}: DroplistProps) {

  const [open, setOpen] = useState<boolean>(false);
  const [buttonPlaceholder, setButtonPlaceholder] = useState<string>(placeholder);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);


  //Handle with accessibly
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(!open);
      }
    };

    // Add event listener when component mounts or isOpen changes
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]); 

  const handleOnChange = useCallback((item: Items) => {
    handleSelectItem(item);
    setButtonPlaceholder(item.name);
    setOpen(false)
  }, [open, handleSelectItem]);

  const {extraClasses} = useBaseComponent({
    fontFamily,
    textSize
  });


  return (
    <div className={styles.container}>
      {label && (
        <Text
          content={label}
          fontFamily={fontFamily}
          textSize={textSize}
          textColor="var(--color-quartenary)"
        />
      )}
      <div 
        className={`
          ${styles.dropList}
          ${customClassName || ''}
          ${styles[width || 'half']}
        `}
      >
        <button 
          type="button" 
          name={name} 
          aria-label={label ?? name}
          className={`${styles.button} ${extraClasses}`}
          onClick={handleOpen}
        >
          <span>{buttonPlaceholder}</span>
          <IconChevronDown />
        </button>
        {list && list.length > 0 && (
          <div className={`${styles.drop} ${open ? styles.open : ''}`}>
            {listTitle && (
              <Title 
                tag="h2"
                fontFamily={fontFamily}
                content={listTitle}
              />
            )}
            <ul className={styles.list}>
              {list.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.item} ${extraClasses}`}
                  onClick={() => handleOnChange(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Droplist;