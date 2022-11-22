import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';

test('Teste o componente <FavoritePokemon.js />', () => {
  renderWithRouter(<FavoritePokemon />);

  const favTitle = screen.getByText(/no favorite pokémon found/i);
  expect(favTitle).toBeInTheDocument();
});
