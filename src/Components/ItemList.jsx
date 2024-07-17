import React from 'react'
import { useContext } from 'react'
import { GroceryContext } from './GroceryContext/GroceryContext'
import Items from './Items';

function ItemList() {
  const {items , setItems}  = useContext(GroceryContext);
  console.log(items);
  return (
    <>
      {items.map((elem , ind)=><Items key={ind} name={elem} id={ind}/>)}
    </>
  )
}

export default ItemList