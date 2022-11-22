import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

test('Teste o componente <NotFound.js />', () => {
  renderWithRouter(<NotFound />);

  const notFoundH2 = screen
    .getByRole('heading', { name: /page requested not found/i });

  const img = screen
    .getByRole('img', { name: /pikachu crying because the page requested was not found/i });

  expect(notFoundH2).toHaveTextContent('Page requested not found');
  expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
