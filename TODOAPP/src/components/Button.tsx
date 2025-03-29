import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`h-12 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition-all ${className}`}>
      {children}
    </button>
  );
};

export default Button;
