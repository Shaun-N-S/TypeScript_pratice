import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    setItems((prev) => [...prev, inputValue]);
    setInputValue('');
  };

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Todo List</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            className="h-12 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your task..."
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            type="submit"
            className="h-12 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition-all"
          >
            Add Task
          </button>
        </form>

        <div className="bg-gray-50 mt-4 p-4 rounded-lg shadow-inner max-h-60 overflow-y-auto">
          {items.map((task, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-green-100 rounded-lg mb-2">
              <p className="text-gray-800">{task}</p>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-800 transition-all"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
