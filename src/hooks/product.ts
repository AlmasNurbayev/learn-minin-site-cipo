import axios, { AxiosError } from 'axios'
import { IProduct } from '../model';
import React, { useEffect, useState } from 'react';


export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(''); 

    function addProduct(product: IProduct) {
      setProducts(prev => [...prev, product] )
    }
  
    async function fetchProducts() {
      try {
        setError('');
        setLoading(true);
        const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=7');
        setProducts(res.data);
        setLoading(false);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }    
    }
    
    
    //const [count, setCount] = useState(0);
    useEffect(()=>{
      fetchProducts();
    }, [])

    return {products, error, loading, addProduct}
}