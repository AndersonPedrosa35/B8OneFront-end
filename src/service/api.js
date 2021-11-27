import axios from 'axios';

const api = axios.create({
  baseURL: 'https://b8onebackend.herokuapp.com/'
});

export const findAll = async () => api.get('/products')
  .then(({ data }) => data)
  .catch((err) => console.error(err));

export const createProduct = async (body) => api.post('/products', body)
  .then(( data ) => data)
  .catch((err) => console.error(err));
