import React from 'react';
import Button from '../components/button';

type Item = {
  title: string;
  id: string;
};

type ItemListProps = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const ItemList: React.FC<ItemListProps> = ({ items, setItems }) => {
  const handleDelete = (id: string) => {
    setItems(items.filter((data) => data.id !== id));
  };

  return (
    <div className="bg-gray-50 mt-4 p-4 rounded-lg shadow-inner max-h-60 overflow-y-auto">
      {items.map((data) => (
        <div key={data.id} className="flex items-center justify-between p-2 bg-green-100 rounded-lg mb-2">
          <p className="text-gray-800">{data.title}</p>
          <Button onClick={() => handleDelete(data.id)} className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-800 transition-all">
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

