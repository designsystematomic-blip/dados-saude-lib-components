import { useBaseComponent } from '@lib/hooks';
import Text from '../Text';
import Title from '../Title';
import styles from './Card.module.css';
import type { CardProps } from './Card.types';

function Card ({ 
  title, 
  subtitle, 
  link, 
  children, 
  fontFamily = 'primary', 
  fontWeight, 
  textAlign, 
  textSize, 
  titleColor, 
  subtitleColor, 
  style }: CardProps) {

  const { extraClasses } = useBaseComponent({
    fontFamily,
    fontWeight,
    textAlign,
    textSize
  });

  return (
    <div className={styles.container} style={style}>
      <div className={styles.row}>
        <div className={`${styles.column}`}>
          {title && <Title tag='h3' content={title} textAlign={textAlign} fontWeight={fontWeight} fontFamily={fontFamily} textSize={textSize} textColor={titleColor} />}
          {subtitle && <Text content={subtitle} textAlign={textAlign} fontWeight={fontWeight} fontFamily={fontFamily} textSize={textSize} textColor={subtitleColor} />}
        </div>
        {link?.href && (
          <a 
            href={link.href} 
            title={link.text} 
            className={`${styles.link} ${extraClasses}`} 
            style={{ color: link.textColor }}
          >
            <Title tag='span' content={link.text} textAlign={textAlign} fontWeight={fontWeight} fontFamily={fontFamily} textSize={textSize} textColor={link.textColor} />
          </a>
        )}
      </div>
      {children}
    </div>
  );
}

export default Card;