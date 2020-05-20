import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: 'https://prostorecatalog.firebaseio.com',
});

const api = {
  postNewProduct: (
    title, 
    photo, description, price, sale, dateEndSale
  ) => BASE_CONNECTION.post('/products.json', 
      {
        title, 
        photo, description, price, sale, dateEndSale
      }, 
  ),
  getProductList: () => BASE_CONNECTION.get('/products.json'),
  getOneProduct: id => BASE_CONNECTION.get(`/products/${id}.json`),
  editProduct: (id, title, photo,
    description, price, sale, dateEndSale) =>  BASE_CONNECTION
    .put(`/products/${id}.json`, {
    title, photo, description, price, sale, dateEndSale
  }),
  deleteProduct: id => BASE_CONNECTION.delete(`products/${id}.json`),
};


export default api;
