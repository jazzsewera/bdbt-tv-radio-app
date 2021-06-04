import React, { ReactElement, useState } from 'react';
import { TITLE, SUCCESS_MESSAGE } from './Constants';
import AuthForm from './AuthForm';
import onAuthSubmit from './AuthSubmit';
import { useAppSelector } from '../redux-store/Hooks';

const Auth = (): ReactElement => {
  const isLoggedIn = useAppSelector((state) => state.credentials?.isLoggedIn);
  return isLoggedIn ? (
    <div>
      <h1>{TITLE}</h1>
      <p>{SUCCESS_MESSAGE}</p>
    </div>
  ) : (
    <div>
      <h1>{TITLE}</h1>
      <AuthForm onSubmit={onAuthSubmit} />
    </div>
  );
};

export default Auth;
