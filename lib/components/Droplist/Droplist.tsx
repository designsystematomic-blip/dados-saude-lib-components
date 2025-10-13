import { IconChevronDown } from '@lib/icons';
import Text from '../Text';
import styles from './Droplist.module.css';
import type { DroplistProps, Items } from './Droplist.types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Title from '../Title';
import toCapitalizeCase from '@lib/utils';

function Droplist ({ 
  label,
  name,
  placeholder,
  listTitle,
  list,
  handleSelectItem,
  customClassName, 
  width,
  variant,
  size
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

  const extraClasses = useMemo(() => {
    let classes = "";

    if (variant) {
      classes += ` font${toCapitalizeCase(variant)}`; // fontPrimary, fontSecondary, fontTertiary
    }

    if (size) {
      classes += ` text${toCapitalizeCase(size)}`; // textSmall, textMedium, textLarge
    }

    return classes;
  }, [variant, size]);


  return (
    <div className={styles.container}>
      {label && (
        <Text
          content={label}
          variant={variant}
          size={size}
          color="var(--color-quartenary)"
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
                variant={variant}
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