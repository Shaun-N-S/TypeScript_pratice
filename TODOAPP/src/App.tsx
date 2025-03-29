import React, { useState } from 'react';
import './App.css';
import Input from './components/input';
import Button from './components/button';
import ItemList from './components/ItemList';

type Item = {
  title: string;
  id: string;
};

const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    setItems((prev) => [...prev, { title: inputValue, id: Date.now().toString() }]);
    setInputValue('');
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Todo List</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <Input inputValue={inputValue} setInputValue={setInputValue} />
          <Button type="submit">Add Task</Button>
        </form>
        <ItemList items={items} setItems={setItems} />
      </div>
    </div>
  );
};

export default App;
