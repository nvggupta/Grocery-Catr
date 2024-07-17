import React from 'react';
import ItemList from './Components/ItemList';
import Heading from './Components/Heading';
import Input from './Components/Input';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <>
      <div className='flex flex-col items-center mt-48 gap-5 shadow w-1/2 ms-96 p-10'>
        <ToastContainer />
        <Heading />
        <Input />
        <ItemList />
      </div>
    </>
  );
}

export default App;
