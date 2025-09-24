import { WrapperProps } from './Wrapper.types';
import styles from './Wrapper.module.css';

const Wrapper = ({ props }:WrapperProps) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
