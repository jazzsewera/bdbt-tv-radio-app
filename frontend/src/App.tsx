import React from 'react';
import { Link, Route } from 'react-router-dom';

import Home from './home/Home';
import Auth from './auth/Auth';
import ProductionList from './production-list/ProductionList';

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth">Log in</Link>
          </li>
          <li>
            <Link to="/production-list">Production List</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/production-list">
        <ProductionList />
      </Route>
    </div>
  );
};

export default App;
