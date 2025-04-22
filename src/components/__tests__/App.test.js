import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Copyright from '../Copyright';
import ReactComponent from '../ReactComponent';

jest.mock('../Copyright');
jest.mock('../ReactComponent');

describe('App', () => {
  it('renders ReactComponent', () => {
    render(<App />);
    expect(ReactComponent).toHaveBeenCalled();
  });

  it('renders Copyright', () => {
    render(<App />);
    expect(Copyright).toHaveBeenCalled();
  });
});
