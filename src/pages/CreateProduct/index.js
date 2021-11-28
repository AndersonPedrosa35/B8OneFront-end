import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { createProduct } from '../../service/api';
import check from '../../assets/check.svg';
import './style.css';

export default function CreateProduct() {
  const [inputProduct, setInputProduct] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  
  async function handleSubmitNewProduct(e) {
    e.preventDefault();
    setIsChecked(!isChecked);
    // const request = await createProduct(inputProduct);
    // console.log(request, 'POST PARA ENVIAR OS ITEMS PARA O BANCO');
    setInputProduct([]);
    // setTimeout(() => navigate('/'), 1000);
  }

  function handleChange({ target: { id, value } }) {
    setInputProduct({ ...inputProduct, [id]: value });
  }

  function handleClickButton({ target }) {
    const methodClass = target.classList;
    methodClass.contains('click') ? methodClass.remove('click') :
      methodClass.add('click');
  }

  return (
    <form onSubmit={ handleSubmitNewProduct } className="formProduct">
      <h3>Cadastre um produto</h3>
      <label htmlFor="title">
        Título
        <input
          id="title"
          onChange={ handleChange }
          value={ inputProduct['title'] }
          minLength='8'
          required
        />
      </label>
      <label htmlFor="file">
        Arquivo
        <input
          id="file"
          value={ inputProduct['file'] }
          onChange={ handleChange }
          required
        />
      </label>
      <label htmlFor="describe">
        Descrição
        <input
          id="describe"
          value={ inputProduct['describe'] }
          onChange={ handleChange }
          minLength='50'
          required
        />
      </label>
      <label htmlFor="category">
        Categoria
        <input
          id="category"
          value={ inputProduct['category'] }
          onChange={ handleChange }
          minLength='3'
          required
        />
      </label>
      <label htmlFor="price">
        Preço
        <input
          type='number'
          id="price"
          value={ inputProduct['price'] }
          onChange={ handleChange }
          required
        />
      </label>
      <label htmlFor="promotion">
        Preço promocional
        <input
          type='number'
          id="promotion"
          value={ inputProduct['promotion'] }
          onChange={ handleChange }
          required
        />
      </label>
      <button type="submit" onClick={ handleClickButton }>
      { isChecked ? 
      (
        <> 
          <img src={ check } alt='clicado' /> 
          Enviado
        </>
      ) 
      : 'Enviar' }
      </button>
    </form>
  )
}
