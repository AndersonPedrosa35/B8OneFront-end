import React, { useState } from 'react';
import { createProduct } from '../service/api';

export default function CreateProduct() {
  const [inputProduct, setInputProduct] = useState({});
  return (
    <form>
      <label htmlFor="title">
        <input id="title" />
      </label>
      <label htmlFor="describe">
        <input id="describe" />
      </label>
      <label htmlFor="category">
        <input id="category" />
      </label>
      <label htmlFor="price">
        <input id="price" />
      </label>
      <label htmlFor="promotion">
        <input id="promotion" />
      </label>
    </form>
  )
}
