import React, { useEffect, useState } from 'react';
import { Product } from './components/Product';
//import { products } from './data/products';
import axios from 'axios'
import { IProduct } from './model';
//import logo from './logo.svg';


function App() {
  
  const [products, setProducts] = useState<IProduct[]>([]);

  async function fetchProducts() {
    const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=7');
    console.log(res);
  }
  
  
  //const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('effect');
    fetchProducts();
  }, [])

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
    {/* <h1 className='font-bold'>Hello react {count}</h1>
    <button className='py-2 px-4 border' onClick={()=> setCount(count + 1)}> Test TSX </button> */}
      {/* {products.forEach(element => {
        <Product product={element} key={element.id} />
      })} */}
      {products.map(element => <Product product={element} key={element.id} />)}
    </div>
  );
}

export default App;
