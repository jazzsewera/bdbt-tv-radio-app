import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux-store/Hooks';
import { LOGIN_BUTTON_TEXT, TITLE } from './Constants';

const Home: React.FC = () => {
  const credentials = useAppSelector((state) => state.credentials);
  return (
    <div>
      <h1>{TITLE}</h1>
      <Link to="/auth">{LOGIN_BUTTON_TEXT}</Link>
      <div>
        Your credentials are: {credentials?.username}, {credentials?.password}
      </div>
    </div>
  );
};

export default Home;
