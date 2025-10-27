import styles from "./Logo.module.css";
import type { LogoProps } from "./Logo.types";

const LogoImg = ({ type, src, svg, size, alt, url }: LogoProps) => {
  return (
    <div className={styles[size]}>
      {type === "img" ? <img src={src} alt={alt} /> : svg}
    </div>
  );
};

const Logo = (props: LogoProps) => {
  const { url } = props;
  if (url) {
    return (<a href={url}><LogoImg {...props} /></a>);
  }
  return <LogoImg {...props} />;
};

export default Logo;
