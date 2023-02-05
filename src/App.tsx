import React, { useState } from 'react';
import { Product } from './components/Product';
import { products } from './data/products';
//import logo from './logo.svg';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
    <h1 className='font-bold'>Hello react {count}</h1>
    <button className='py-2 px-4 border' onClick={()=> setCount(count + 1)}> Test TSX </button>
    <Product product={products[0]} title={'test'} />
    </div>
  );
}

export default App;
