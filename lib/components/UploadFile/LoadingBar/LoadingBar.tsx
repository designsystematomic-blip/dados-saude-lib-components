import type { LoadingBarProps } from './LoadingBar.types';
import styles from './LoadingBar.module.css';
import { useEffect, useState } from 'react';
import { Text } from '@lib/main';

const LoadingBar = ({ 
  files, 
  showPercentage = false, 
  backgroundColor = 'var(--bg-quartenary)', 
  progressColor = 'var(--bg-primary)',
  onChange,
  loadingMessage,
  loadedMessage
}: LoadingBarProps) => {
  const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (files?.length === 0) {
        setProgress(0);
        if (onChange) onChange(0);
        return;
      }
  
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 10;
          if (onChange) onChange(newProgress);
          if (newProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
      }, 200);
  
      return () => {
        setProgress(0);
        if (onChange) onChange(0);
        clearInterval(interval);
      };
  
    }, [files]);

  return (

    <div className={styles.progressBar} aria-busy={progress <= 100 ? "true" : "false"} aria-describedby="progress-bar">
      {showPercentage && progress > 0 && (
        <Text variant="secondary" size="medium" color='var(--color-quintenary)'>{progress}%</Text>
      )}

      <div className={styles.bar} style={{ backgroundColor: backgroundColor }}>
        <span className={styles.progress} style={{ width: `${progress}%`, backgroundColor: progressColor }} ></span>
      </div>

      {loadingMessage && (progress > 0 && progress < 100) && <Text variant="secondary" size="medium" color='var(--color-sextenary)'>{loadingMessage}</Text>}
      {loadedMessage && progress === 100 && <Text variant="secondary" size="medium" color='var(--color-sextenary)'>{loadedMessage}</Text>}

    </div>

  )

};

export default LoadingBar;
