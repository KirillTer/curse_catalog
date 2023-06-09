import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '../store/store';
import App from '../App';
import { Provider } from 'react-redux';

test('test Routes', async () => {
  render(
    <MemoryRouter>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  await userEvent.click(screen.getByTestId('courses-link'))
  expect(screen.getByTestId('users-page')).toBeInTheDocument();
  await userEvent.click(screen.getByTestId('posts-link'))
  expect(screen.getByTestId('posts-page')).toBeInTheDocument();
});
