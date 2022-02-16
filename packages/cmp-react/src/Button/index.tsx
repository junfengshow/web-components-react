import React, { MouseEventHandler } from 'react';
import c from './index.less';

export interface IButtonProps {
  children: React.ReactChild;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={c.cmpBtn}>
      {children}
    </button>
  );
};
export default Button;
