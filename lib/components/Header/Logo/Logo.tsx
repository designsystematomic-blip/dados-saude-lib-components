import type { LogoProps } from "./Logo.types";
import styles from "./Logo.module.css";

const Logo = ({ type, src, svg, size, alt }: LogoProps) => {
  console.log("size", size);
  return (
    <div className={styles[size]}>
      {type === "img" ? <img src={src} alt={alt} /> : svg}
    </div>
  );
};

export default Logo;
