import {
  ADD_PRODUCT_DATA_SUCCESS, GET_PRODUCTS_SUCCESS,
  GET_ONE_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS
} from '../actions/root.actions';

 const initialState = {
  products : [
    {
      title: '',
      photo: '', 
      description: '', 
      price: 0, 
      sale: 0, 
      dateEndSale: '',
    },
  ],
  currentProduct : {
    title: '',
    photo: '', 
    description: '', 
    price: '', 
    sale: '', 
    dateEndSale: '',
    id: '',
  }
 };

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {     
    case GET_PRODUCTS_SUCCESS: {
      return { ...state,
        products: action.payload
      };
    } 
    case GET_ONE_PRODUCT_SUCCESS: {
      return { ...state,
        currentProduct: action.payload
      };
    }
    case ADD_PRODUCT_DATA_SUCCESS: {
      return {
        ...state, products: [...state.products, action.payload],
      };
    }
    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: state.products
          .filter(product => product.id !== action.payload),
      };
    }
     default:
       return state;
   }
 };

 export default rootReducer;
