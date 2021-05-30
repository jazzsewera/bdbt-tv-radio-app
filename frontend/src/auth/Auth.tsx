import React, { ReactElement, useState } from 'react';

const Auth = (): ReactElement => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? (
    <div>
      <h1>Auth</h1>
      <p>You were successfully logged in</p>
    </div>
  ) : (
    <div>
      <h1>Auth</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoggedIn(true);
        }}
      >
        <input type="text" aria-label="Username" />
        <input type="password" aria-label="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
