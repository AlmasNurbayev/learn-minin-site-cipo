import axios from 'axios';
import React, { useState } from 'react'
import { IProduct } from '../model';
import ErrorMessage from './ErrorMessage';

const productData: IProduct = {
  //  id: 151,
  title: 'Jacket',
  price: 3.5,
  description: 'super jacket leather',
  image: 'https://i.pravatar.cc',
  category: 'wheather',
  rating: {
    rate: 42,
    count: 10
  }
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

function CreateProduct({ onCreate }: CreateProductProps) {

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    setError('');
    if (value.trim().length === 0) {
      setError('please enter valid title');
      return;
    }

    productData.title = value;

    const res = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
    onCreate(res.data);

  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => { // у минина по другому -   const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button type="submit" className="py-2 px-4 border bg-yellow-400">Create</button>
    </form>
  )
}


export default CreateProduct