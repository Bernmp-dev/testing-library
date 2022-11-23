import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemonList from '../data';

test('Teste o componente <Pokedex.js />', () => {
  renderWithRouter(<App />);

  const pokeName = screen.getByTestId('pokemon-name').innerHTML;
  const pokeImg = screen.getByRole('img');
  const poketest = pokemonList.find((poke) => poke.name === pokeName);
  const detailButton = screen.getByRole('link', { name: /more details/i });
  const typeId = screen.getByTestId('pokemon-type');

  expect(pokeImg.src).toBe(poketest.image);
  expect(pokeImg.alt).toBe(`${pokeName} sprite`);

  userEvent.click(detailButton);

  const favCheck = screen
    .getByRole('checkbox', { name: /pokémon favoritado\?/i });

  userEvent.click(favCheck);

  const favImg = screen
    .getByRole('img', { name: `${pokeName} is marked as favorite` });

  expect(favImg.src).toBe('http://localhost/star-icon.svg');
  expect(favImg.alt).toBe(`${pokeName} is marked as favorite`);
  expect(typeId).toHaveTextContent(poketest.type);
  expect(detailButton.href).toBe(`http://localhost/pokemon/${poketest.id}`);
});
