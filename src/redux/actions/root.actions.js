import api from '../../api/api';
import fbObjectToArray from '../../services/TransformService';

export const ADD_PRODUCT_DATA_SUCCESS = 'ADD_PRODUCT_DATA_SUCCESS';
export const ADD_PRODUCT_DATA_FAIL = 'ADD_PRODUCT_DATA_FAIL';
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';
export const EDIT_PRODUCT_FAIL = 'GET_PRODUCTS_FAIL';
export const DELETE_PRODUCT_SUCCESS = 'GET_PRODUCTS_FAIL';
export const DELETE_PRODUCT_FAIL = 'GET_PRODUCTS_FAIL';
export const GET_ONE_PRODUCT_REQUEST = 'GET_ONE_PRODUCT_REQUEST';
export const GET_ONE_PRODUCT_SUCCESS = 'GET_ONE_PRODUCT_SUCCESS';
export const GET_ONE_PRODUCT_FAIL = 'GET_ONE_PRODUCT_FAIL';

export const getProductsData = () => async (dispatch) => {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    }); 
    try {
      const fbData = await api.getProductList();
      const products = fbObjectToArray(fbData.data);
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: products,
        });
    } catch (err) {
      dispatch({
        type: GET_PRODUCTS_FAIL,
        payload: err,
        error: true,
      });
    }
  };

  export const getCurrentProduct = (id) => async (dispatch) => {
    dispatch({
      type: GET_ONE_PRODUCT_REQUEST,
    }); 
    try {
      const product = await api.getOneProduct(id);
        dispatch({
          type: GET_ONE_PRODUCT_SUCCESS,
          payload: product.data,
        });
    } catch (err) {
      dispatch({
        type: GET_ONE_PRODUCT_FAIL,
        payload: err,
        error: true,
      });
    }
  };

export const postNewProductData = (
    title,
    photo, description, price, sale, dateEndSale, history,
  ) => (dispatch) => {
    api.postNewProduct(title, photo, description, price, sale, dateEndSale )
      .then((data) => {
        dispatch({
          type: ADD_PRODUCT_DATA_SUCCESS,
          payload: data.config.data,
        });
        history.push('/product-list');
      }).catch((err) => {
        dispatch({
          type: ADD_PRODUCT_DATA_FAIL,
          payload: err,
        });
      });
  };

  export const editProduct = (id, title, photo,
    description, price, sale, dateEndSale, history) => (dispatch) => {
    api.editProduct(id, title, photo, 
      description, price, sale, dateEndSale).then(() => {
        dispatch(getProductsData());
        history.push('/product-list');
    }).catch((err) => {
      console.log('error');
      dispatch({
        type: EDIT_PRODUCT_FAIL,
        payload: err,
      });
    });
  };

  export const deleteProduct = id => (dispatch) => {
    api.deleteProduct(id).then(() => {
      console.log('delete hello');
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: id,  
      });
    }).catch((err) => {
      console.log('error');
      dispatch({
        type: DELETE_PRODUCT_FAIL,
        payload: err,
      });
    });
  };
