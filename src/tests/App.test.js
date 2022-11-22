import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando Componente App', () => {
  it('Verifica se ao clicar nos links o usuario e redirecionado', () => {
    const { history } = renderWithRouter(<App />);

    const homeTitle = screen.getByRole('link', { name: /home/i });
    const aboutTitle = screen.getByRole('link', { name: /about/i });
    const favoriteTitle = screen.getByRole('link', { name: /Favorite Pokémon/i });

    expect(homeTitle).toBeInTheDocument();
    expect(aboutTitle).toBeInTheDocument();
    expect(favoriteTitle).toBeInTheDocument();

    userEvent.click(homeTitle);
    expect(history.location.pathname).toBe('/');

    userEvent.click(aboutTitle);
    expect(history.location.pathname).toBe('/about');

    userEvent.click(favoriteTitle);
    expect(history.location.pathname).toBe('/favorites');

    act(() => {
      history.push('/inexistente');
    });

    const pageNotFound = screen
      .getByRole('heading', { name: /page requested not found/i });

    expect(pageNotFound).toBeInTheDocument();
  });
});
