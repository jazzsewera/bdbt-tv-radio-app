import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders navbar', () => {
    const navbar = screen.getByRole('navigation');
    expect(navbar.textContent).toContain('Home');
    expect(navbar.textContent).toContain('Login');
  });

  it('clicks on home', () => {
    const homeButton = screen.getByText('Home');
    userEvent.click(homeButton);
    expect(document.location.pathname.toString()).toEqual('/');
  });

  it('clicks on login', () => {
    const loginButton = screen.getByText('Login');
    userEvent.click(loginButton);
    expect(document.location.pathname.toString()).toEqual('/auth');
  });
});
