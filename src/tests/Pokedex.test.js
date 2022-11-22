import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste o componente <Pokedex.js />', () => {
  renderWithRouter(<App />);

  const typeButtons = screen.getAllByTestId('pokemon-type-button');
  const allButton = screen.getByRole('button', { name: /all/i });

  expect(allButton).toBeEnabled();
  expect(allButton).not
    .toHaveProperty('data-testid', 'pokemon-type-button');
  userEvent.click(allButton);

  const allTypes = ['Electric', 'Fire', 'Bug',
    'Poison', 'Psychic', 'Normal', 'Dragon'];

  allTypes.forEach((type, i) => (
    expect(typeButtons[i]).toHaveTextContent(type)));
});
