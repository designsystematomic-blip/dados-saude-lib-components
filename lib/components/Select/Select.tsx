import { useState } from 'react';
import styles from './Select.module.css';
import type { SelectProps } from './Select.types';
import useBaseComponent from '@lib/hooks/useBaseComponent';

function Select ({ id, ariaLabel, label, options, style, fontFamily, textSize, isDisabled, defaultValue, ...props }: SelectProps) {

  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0]?.value || '');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const { extraClasses } = useBaseComponent({
    fontFamily,
    textSize
  });

  return (
    <div className={styles.container}>
      <label className={`${styles.label} ${extraClasses}`} htmlFor={id}>{label}</label>
      <select
        id={id}
        name={id}
        aria-label={ariaLabel}
        style={style}
        className={`${styles.select} ${extraClasses}`}
        onChange={handleChange}
        disabled={isDisabled}
        defaultValue={defaultValue || options[0]?.value || ''}
        {...props}
      >
        {options.map(option => (
          <option 
            key={option.value} 
            value={option.value} 
            className={`${styles.option} ${option.value === selectedValue ? styles.selectedOption : ''}`}
            selected={option.value === selectedValue}
            aria-selected={option.value === selectedValue}
            style={{ 
              color: selectedValue === option.value ? 'white' : 'black',
            }}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;