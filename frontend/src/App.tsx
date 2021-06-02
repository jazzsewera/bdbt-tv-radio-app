import React from 'react';
import style from './App.module.css';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import Home from './home/Home';
import Auth from './auth/Auth';

const App: React.FC = () => (
  <div className="App">
    <Router>
      <div>
        <nav className={style.navbar}>
          <ul className={style.navbarNav}>
            <li>
              <NavLink exact to="/" activeClassName={style.navbarBold}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth" activeClassName={style.navbarBold}>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </div>
    </Router>
  </div>
);

export default App;
