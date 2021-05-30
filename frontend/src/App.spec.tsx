import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  let app: RenderResult;
  beforeEach(() => {
    app = render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders navbar', () => {
    const navbar = app.getByRole('navigation');
    expect(navbar.textContent).toContain('Home');
    expect(navbar.textContent).toContain('Login');
  });

  it('clicks on home', () => {
    const homeButton = app.getByText('Home');
    homeButton.click();
    expect(document.location.pathname.toString()).toEqual('/');
  });

  it('clicks on login', () => {
    const loginButton = app.getByText('Login');
    loginButton.click();
    expect(document.location.pathname.toString()).toEqual('/auth');
  });
});
