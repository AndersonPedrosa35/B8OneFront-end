import React, { useState } from 'react';
import { createProduct } from '../service/api';

export default function CreateProduct() {
  const [inputProduct, setInputProduct] = useState({});
  
  async function handleSubmitNewProduct(e) {
    e.preventDefault();
    const request = await createProduct(inputProduct);
    console.log(request);
  }

  function handleChange({ target: { id, value } }) {
    setInputProduct({ ...inputProduct, [id]: value });
  }

  return (
    <form onSubmit={ handleSubmitNewProduct } className="formProduct">
      <label htmlFor="title">
        Título
        <input id="title" onChange={ handleChange } />
      </label>
      <label htmlFor="file">
        Arquivo
        <input type="file" id="file" onChange={ handleChange } />
      </label>
      <label htmlFor="describe">
        Descrição
        <input id="describe" onChange={ handleChange } />
      </label>
      <label htmlFor="category">
        Categoria
        <input id="category" onChange={ handleChange } />
      </label>
      <label htmlFor="price">
        Preço
        <input id="price" onChange={ handleChange } />
      </label>
      <label htmlFor="promotion">
        Preço promocional
        <input id="promotion" onChange={ handleChange } />
      </label>
      <button type="submit">
        Enviar
      </button>
    </form>
  )
}
