import styles from './Modal.module.css';
import { ModalProps } from './Modal.types';

function Overlay ({ isOpen, onClose }: any) {
  return (
    <div className={`
        ${styles.overlay} 
        ${isOpen ? styles.overlayOpen : ''}`
      }
      tabIndex={isOpen ? 0 : -1}
      onClick={onClose}></div>
  )
}

function Modal ({ id, children, isOpen, onClose, customClassName, width }: ModalProps) {
  return (
    <div id={id} className={styles.container}>
      <Overlay isOpen={isOpen} onClose={onClose} />
      <div 
        className={`
          ${styles.modal} ${isOpen ? styles.open : ''} 
          ${customClassName || ''}
          ${styles[width || 'half']}
        `}
        tabIndex={isOpen ? 0 : -1}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;