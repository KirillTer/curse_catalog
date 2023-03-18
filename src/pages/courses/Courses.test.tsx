import React from 'react';
import { render, screen } from '@testing-library/react';
import { setupStore } from '../../store/store';
import Posts from './Courses';
import { Provider } from 'react-redux';

describe('Testing Home page', () => {
  test('renders Posts page', () => {
    render(
      <Provider store={setupStore()}>
        <Posts />
      </Provider>
    );
    const postTitle = screen.getByTestId('posts-page');
    expect(postTitle).toBeInTheDocument();
  });
})
