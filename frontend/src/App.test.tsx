import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  it('tests the app', () => {
    const app = render(<App />);
    expect(app).to.contain(/dupa/i);
  });
});
