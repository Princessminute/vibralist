// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page title', () => {
  render(<App />);
  const titleElement = screen.getByText((content, element) =>
    element.tagName.toLowerCase() === 'h2' && content.includes('Bienvenida a')
  );
  expect(titleElement).toBeInTheDocument();
});
