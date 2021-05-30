import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Auth from './Auth';

describe('Auth page tests', () => {
  beforeEach(() => {
    render(<Auth />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders auth form', () => {
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });

  it('successfully logs in', () => {
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    userEvent.type(usernameInput, 'username');
    userEvent.type(passwordInput, 'password');
    userEvent.click(loginButton);

    const loginSuccessful = screen.getByText(/successfully logged in/i);
    expect(loginSuccessful).toBeTruthy();
  });
});
