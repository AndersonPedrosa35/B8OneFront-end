import React, { useEffect, useState } from 'react'
import { findAll } from '../../service/api';
import './style.css';

export default function ListItems() {
  const [products, setProducts] = useState([]);

  function formatPrices(price) {
    const index = price.length;
    if(index > 3) {
      const arrayPrice = [...price]; 
      arrayPrice.splice(index - 3, -1, '.');
      price = arrayPrice.join('');
    }
    if (index > 6) {
      const arrayPrice = [...price]; 
      arrayPrice.splice(index - 6, -1, '.');
      return price = arrayPrice.join('');
    }
    return price;
  }

  useEffect(() => {
    const request = async () => findAll()
      .then(({ result }) => {
        result.forEach((item) => {
          item.price = formatPrices(item.price);
          item.promotion = formatPrices(item.promotion);
        })
        setProducts(result);
      });
    request()
  }, []);

  return (
    products && products.map(({ title, file, price, promotion }) => (
      <section className="card">
        {console.log(file)}
        <img src={ file } alt={ `Ilustração da ${ title }` } />
        <li className="title">{ title }</li>
        <li className="price">{ `R$ ${ price },00` }</li>
        <li className="promotion">{ `R$ ${promotion},00` }</li>
      </section>
    ))
  )
}
