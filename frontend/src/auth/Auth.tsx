import React, { ReactElement, useState } from 'react';
import { TITLE, SUCCESS_MESSAGE } from './Constants';
import AuthForm from './AuthForm';
import onAuthSubmit from './AuthSubmit';

const Auth = (): ReactElement => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? (
    <div>
      <h1>{TITLE}</h1>
      <p>{SUCCESS_MESSAGE}</p>
    </div>
  ) : (
    <div>
      <h1>{TITLE}</h1>
      <AuthForm onSubmit={onAuthSubmit} onSuccess={setIsLoggedIn} />
    </div>
  );
};

export default Auth;
