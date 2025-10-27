import { Text } from '@lib/main';
import { useEffect, useState } from 'react';
import styles from './LoadingBar.module.css';
import type { LoadingBarProps } from './LoadingBar.types';

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

  // Effect para gerenciar o progresso da barra
  useEffect(() => {
    if (files?.length === 0) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => {
      clearInterval(interval);
      setProgress(0);
    };
  }, [files]);

  // Effect separado para notificar mudanças de progresso
  useEffect(() => {
    if (onChange) {
      onChange(progress);
    }
  }, [progress, onChange]);

  return (

    <div className={styles.progressBar} aria-busy={progress <= 100 ? "true" : "false"} aria-describedby="progress-bar">
      {showPercentage && progress > 0 && (
        <Text 
          fontFamily="secondary" textSize="medium" textColor='var(--color-quintenary)'>{progress}%</Text>
      )}

      <div className={styles.bar} style={{ backgroundColor: backgroundColor }}>
        <span className={styles.progress} style={{ width: `${progress}%`, backgroundColor: progressColor }} ></span>
      </div>

      {loadingMessage && (progress > 0 && progress < 100) && <Text fontFamily="secondary" textSize="medium" textColor='var(--color-sextenary)'>{loadingMessage}</Text>}
      {loadedMessage && progress === 100 && <Text fontFamily="secondary" textSize="medium" textColor='var(--color-sextenary)'>{loadedMessage}</Text>}

    </div>

  )

};

export default LoadingBar;
