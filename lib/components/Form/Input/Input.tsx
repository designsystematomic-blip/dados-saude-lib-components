import { InputProps } from './Input.types';
import styles from './Input.module.css';

const Input = ({ props }:InputProps) => {
  return <div className="input">{children}</div>;
};

export default Input;
