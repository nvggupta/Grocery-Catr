import { createContext, useState } from "react";
import React from "react";
export const GroceryContext = createContext(null);

export const GroceryProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <GroceryContext.Provider value={{ items, setItems }}>
      {props.children}
    </GroceryContext.Provider>
  );
};
