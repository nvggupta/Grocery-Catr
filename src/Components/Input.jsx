import React, { useContext, useState } from "react";
import { GroceryContext } from "./GroceryContext/GroceryContext";
import { toast } from 'react-toastify';

const Input = () => {
  const { items, setItems } = useContext(GroceryContext);
  const [value, setValue] = useState("");

  const inputValue = (e) => {
    setValue(e.target.value);
  };

  const setInputs = () => {
    if (value.trim() === "") {
      toast.error('Please enter an item');
    } else {
      const updatedItems = [...items, value];
      setItems(updatedItems);
      setValue("");
      toast.success('Item added successfully');
    }
  };

  return (
    <>
      <div className="flex gap-5 w-1/2">
        <input
          className="border p-3 w-full rounded-lg"
          type="text"
          value={value}
          onChange={inputValue}
        />
        <button
          className="p-3 text-center text-red-600 bg-purple-500 w-1/4 rounded-lg"
          onClick={setInputs}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Input;
