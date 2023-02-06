import React, { useEffect, useState } from 'react';
import CreateProduct from './components/CreateProduct';
import ErrorMessage from './components/ErrorMessage';
import { Loader } from './components/Loader';
import Modal from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/product';

//import logo from './logo.svg';


function App() {

  const {error, loading, products} = useProducts();
  
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      <Modal title='Create new Product'>
        <CreateProduct/>
      </Modal> 
      {error && <ErrorMessage error={error}/>}
      {loading && <Loader/>}
      {products.map(element => <Product product={element} key={element.id} />)}
    </div>
  );
}

export default App;
