import React, { useContext } from 'react';
import { GroceryContext } from './GroceryContext/GroceryContext';
import { toast } from 'react-toastify';

function Items({ name, id }) {
  const { items, setItems } = useContext(GroceryContext);

  const deleteHandler = () => {
    const update = items.filter((_, ind) => ind !== id);
    setItems(update);
    toast.success('Item deleted successfully');
  };

  return (
    <div className='w-full grid grid-cols-3 items-center justify-around mt-5'>
      <div className='min-w-20 max-w-40 flex gap-5'>
        <input type='checkbox' />
        <span>{name}</span>
      </div>
      <button className='bg-red-500 text-white p-2 rounded-lg' onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
}

export default Items;
