import React from 'react';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';

import routes from './routes';

function App() {
  return(
    <div className='app'>
    <Router>
    <>
      <nav >
        <ul className='navigation'>
          <li><Link to='/sign-in'>Sign In</Link></li>
          <li><Link to='/sign-up'>Sign Up</Link></li>
          <li><Link to='/product-list'>Product List</Link></li>           
          <li><Link to='new-product'>New Product</Link></li>
          <li><Link to='/sign-in'>Sign out</Link></li>           
        </ul>           
      </nav>
      <Switch>
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
    </div>
  );
}

export default App;


