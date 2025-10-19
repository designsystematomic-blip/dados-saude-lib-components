import type { StateProps } from './State.types';
import styles from './State.module.css';
import { IconQualityCheck, IconUploadingFile } from '@lib/icons';

const State = ({ uploadState, children }: StateProps) => {
  return (
    <div className={styles.container}>
      {uploadState === 'loading' && <IconUploadingFile />}
      {uploadState === 'error' && <div>Error occurred</div>}
      {uploadState === 'success' && <IconQualityCheck />}
      {children}
    </div>
  );
};

export default State;
