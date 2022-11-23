import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemonList from '../data';

test('Teste o componente <PokemonDetails.js />', () => {
  renderWithRouter(<App />);

  const pokeName = screen.getByTestId('pokemon-name').innerHTML;
  const poketest = pokemonList.find((poke) => poke.name === pokeName);
  const detailButton = screen.getByRole('link', { name: /more details/i });

  userEvent.click(detailButton);

  const detailTitle = screen
    .getByRole('heading', { name: `${pokeName} Details` });
  const summaryH2 = screen
    .getByRole('heading', { name: /summary/i });
  const locationH2 = screen
    .getByRole('heading', { name: `Game Locations of ${pokeName}` });
  const locationImg = screen.getAllByAltText(`${pokeName} location`);
  const favCheckH2 = screen.getByText(/pokémon favoritado\?/i);

  expect(detailTitle).toBeInTheDocument();
  expect(summaryH2).toBeInTheDocument();
  expect(summaryH2.nextElementSibling).toHaveTextContent(poketest.summary);
  expect(locationH2).toBeInTheDocument();

  locationImg.forEach((img, i) => {
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(poketest.foundAt[i].map);
  });

  expect(favCheckH2).toBeInTheDocument();
});
