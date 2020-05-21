import React from 'react';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import { AuthProvider } from './Auth';
import app from "./base";
import ProductList from './pages/ProductList';
import NewProduct from './pages/NewProduct';
import PrivateRoute from "./PrivateRoute";
import './App.css';

import routes from './routes';

function App() {

  return(
    <div className='app'>
    <AuthProvider>     
      <Router>
      <>
        <nav >
          <ul className='navigation'>
            <li><Link to='/sign-in'>Sign In</Link></li>
            <li><Link to='/sign-up'>Sign Up</Link></li>
            <li><Link to='/product-list'>Product List</Link></li>           
            <li><Link to='/new-product'>New Product</Link></li>
            <li><Link to='/sign-in' onClick={() => app.auth().signOut()}>Sign out</Link></li>           
          </ul>           
        </nav>
        <Switch>
            <PrivateRoute exact path="/product-list" component={ProductList} />
            <PrivateRoute exact path="/new-product" component={NewProduct} />
            {
            routes.map(route => (
              <Route
                exact={route.exact}
                key={route.toString()}
                path={route.path}
              >
                {route.component}
              </Route>
                  ))
          }
        </Switch>      
      </>   
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;


