import React from 'react';

type InputProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input: React.FC<InputProps> = ({ inputValue, setInputValue }) => {
  return (
    <input
      type="text"
      value={inputValue}
      className="h-12 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      placeholder="Enter your task..."
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};

export default Input;
