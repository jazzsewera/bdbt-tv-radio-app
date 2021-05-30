import React from 'react';
import { cleanup, Matcher, render, RenderResult, SelectorMatcherOptions } from '@testing-library/react';
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
    expect(navbar.textContent).toEqual('HomeLogin');
  });

  it('clicks on home', () => {
    const homeButton = app.getByText('Home');
    homeButton.click();
    expect(homeButton.classList.toString).toContain('navbarBold');
    expect(homeButton.style.fontWeight).toEqual('bold');
  });

  it('clicks on login', () => {
    const loginButton = app.getByText('Login');
    loginButton.click();
    expect(loginButton.style.fontWeight).toEqual('bold');
  });
});
