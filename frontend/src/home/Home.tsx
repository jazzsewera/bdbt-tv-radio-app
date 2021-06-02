import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_BUTTON_TEXT, TITLE } from './Constants';

const Home: React.FC = () => (
  <div>
    <h1>{TITLE}</h1>
    <Link to="/auth">{LOGIN_BUTTON_TEXT}</Link>
  </div>
);

export default Home;
