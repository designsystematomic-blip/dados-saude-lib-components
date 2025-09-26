import styles from "./Teste.module.css";
import type { TesteProps } from "./Teste.types";

function Teste({ text }: TesteProps) {
  return <div className={styles.container}>{text}</div>;
}

export default Teste;
