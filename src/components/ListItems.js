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
    products && products.map(({ title, file, describe, price, promotion }) => (
      <div>
        <img src={ file } alt={ `Ilustração da ${ title }` } />
        <li>{ title }</li>
        <li>{ describe }</li>
        <li>{ price }</li>
        <li>{ promotion }</li>
      </div>
    ))
  )
}
