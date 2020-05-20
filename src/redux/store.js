import { createStore, applyMiddleware } from 'redux';
 //combineReducers, applyMiddleware 
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';


// const reducers = combineReducers({
//   rootReducer,
//   homeReducer,
//   chartsReducer,
//   categoriesReducer,
//   profileReducer,
// });

const store = createStore(rootReducer, applyMiddleware(thunk)); 
  //applyMiddleware(thunk);
  window.srr = store;
export default store;
