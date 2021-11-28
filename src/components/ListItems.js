import React, { useEffect, useState } from 'react'
import { findAll } from '../service/api';

export default function ListItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const request = async () => findAll()
      .then(({ result }) => setProducts(result));
    request()
  }, []);

  return (
    products && products.map(({ title, describe, price, promotion }) => (
      <div>
        <li>{ title }</li>
        <li>{ describe }</li>
        <li>{ price }</li>
        <li>{ promotion }</li>
        {/* <button onClick={}>
        { isChecked ? (<img src={ check } alt='clicado' />, 'Adicionado') : 'Adicionar' }
        </button> */}
      </div>
    ))
  )
}
