import React, { useState } from 'react'

function CreateProduct() {

  const [value, setValue] = useState('');  

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
  }   

  function changeHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

  return (
    <form onSubmit={submitHandler}>
        <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value = {value}
        onChange = {changeHandler}
        >
        </input>
        <button type="submit" className="py-2 px-4 border bg-yellow-400">Create</button>
    </form>
  )
}

export default CreateProduct