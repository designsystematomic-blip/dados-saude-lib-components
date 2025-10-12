import styles from './Drawer.module.css';
import type { DrawerProps } from './Drawer.types';

function Overlay ({ position, isOpen, onClose }: any) {
  return (
    <div className={`
        ${styles.overlay} 
        ${styles[position || 'left']}
        ${isOpen ? styles.overlayOpen : ''}`
      }
      tabIndex={isOpen ? 0 : -1}
      onClick={onClose}></div>
  )
}

function Drawer ({ children, isOpen, onClose, position, customClassName, width }: DrawerProps) {
  return (
    <div className={styles.container}>
      <Overlay position={position || 'left'} isOpen={isOpen} onClose={onClose} />
      <div 
        className={`
          ${styles.drawer} ${isOpen ? styles.open : ''} 
          ${styles[position || 'left']} 
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

export default Drawer;