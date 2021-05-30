import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home screen tests', () => {
  it('renders properly', () => {
    render(<Home />);
    const title = screen.getByText('TV and Radio Production System');
    expect(title).toBeTruthy();
  });
});
