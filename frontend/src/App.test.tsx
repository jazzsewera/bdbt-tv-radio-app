import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  it('tests the app', () => {
    const { getAllByText } = render(<App />);
    const home = getAllByText('Home');
    for (let h of home) {
      expect(h.textContent).to.be.equal('Home');
    }
  });
});
