import React, { MouseEventHandler } from 'react';
const a = 'a';
export interface IButtonProps {
  children: React.ReactChild;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
export default Button;
