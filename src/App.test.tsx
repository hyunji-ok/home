import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders ok\'s hompage', () => {
  render(<App />, {wrapper: BrowserRouter});
  const linkElement = screen.getByText('Home');
  expect(linkElement).toBeInTheDocument();
});
