import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

test('Teste o componente <About.js />.', () => {
  renderWithRouter(<About />);

  const aboutH2 = screen
    .getByRole('heading', { name: /about pokédex/i });

  const imgPokedex = screen
    .getByRole('img', { name: /pokédex/i });
  const imgURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

  expect(aboutH2).toBeInTheDocument();
  expect(imgPokedex.src).toBe(imgURL);
});
