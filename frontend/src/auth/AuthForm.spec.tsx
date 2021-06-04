import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthForm, { AuthFormProps } from './AuthForm';

describe('AuthForm tests', () => {
  const loginString = 'login';
  const passwordString = 'password';

  const mockProps: AuthFormProps = {
    onSubmit: (login, password) => {
      expect(login).toEqual(loginString);
      expect(password).toEqual(passwordString);
    },
  };

  beforeEach(() => {
    render(<AuthForm {...mockProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('logs in', () => {
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    userEvent.type(usernameInput, loginString);
    userEvent.type(passwordInput, passwordString);
    userEvent.click(loginButton);
  });
});
