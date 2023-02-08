import React, { useContext } from 'react'
import CreateProduct from '../components/CreateProduct';
import ErrorMessage from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import Modal from '../components/Modal';
import { Product } from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/product';
import { IProduct } from '../model';

export function ProductPage() {
    const {error, loading, products, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext);
  
    function createHandler(product:IProduct) {
      close();
      addProduct(product);
    }
  
    return (
      <div className='container mx-auto max-w-2xl pt-5'>
        {modal && <Modal title='Create new Product' onClose={close}>
          <CreateProduct onCreate={createHandler}/>
        </Modal>} 
        {error && <ErrorMessage error={error}/>}
        {loading && <Loader/>}
        {products.map(element => <Product product={element} key={element.id} />)}
        <button className='fixed bottom-5 right-5 rounded-2xl  bg-red-700 text-white text-2xl px-4 py-4' 
        onClick={open}
        >+</button>
      </div>
    );
}

export default ProductPage;