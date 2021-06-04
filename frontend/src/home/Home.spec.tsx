import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter as MockRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import { LOGIN_BUTTON_TEXT } from './Constants';

describe('Home screen tests', () => {
  beforeEach(() => {
    render(
      <MockRouter>
        <Home />
        <Route path="/auth">
          <div>Auth</div>
        </Route>
      </MockRouter>,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders properly', () => {
    screen.getByText('TV and Radio Production System');
    screen.getByRole('link', { name: LOGIN_BUTTON_TEXT });
  });

  it('goes to login page', () => {
    const button = screen.getByRole('link', { name: LOGIN_BUTTON_TEXT });
    userEvent.click(button);
    screen.getByText('Auth');
  });
});
