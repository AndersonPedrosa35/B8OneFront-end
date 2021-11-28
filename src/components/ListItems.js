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
    products && products.map(({ title, file, price, promotion }) => (
      <section className="card">
        {console.log(file)}
        <img src={ file } alt={ `Ilustração da ${ title }` } />
        <li className="title">{ title }</li>
        <li className="price">{ price }</li>
        <li className="promotion">{ promotion }</li>
      </section>
    ))
  )
}
