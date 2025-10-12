import type { IconProps } from '../Icon.types';

const Plus = ({ fillColor = 'white' }:IconProps) => {
  return <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.1666 8.66683H9.16659V12.6668H7.83325V8.66683H3.83325V7.3335H7.83325V3.3335H9.16659V7.3335H13.1666V8.66683Z" fill={fillColor}/>
    </svg>
    ;
};

export default Plus;
