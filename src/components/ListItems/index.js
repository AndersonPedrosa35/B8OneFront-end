import React, { useEffect, useState } from 'react'
import { findAll } from '../../service/api';
import './style.css';

export default function ListItems() {
  const [products, setProducts] = useState([]);

  function parcelPrice(promotion) {
    const parcel = parseFloat(promotion / 10).toFixed(2);
    return `10x de R$ ${parcel} `
  }

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
          item.parcel = parcelPrice(item.promotion)
          item.promotion = formatPrices(item.promotion);
        })
        setProducts(result);
      });
    request()
  }, []);

  return (
    products && products.map(({ title, file, price, promotion, parcel }) => (
      <section className="card">
        {console.log(file)}
        <img src={ file } alt={ `Ilustração da ${ title }` } />
        <li className="title">{ title }</li>
        <li className="price">{ `R$ ${ price },00` }</li>
        <li className="promotion">{ `R$ ${promotion},00` }</li>
        <small>em até <strong>{ parcel }</strong> sem juros</small>
      </section>
    ))
  )
}
