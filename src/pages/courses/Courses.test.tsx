import React from 'react';
import { render, screen } from '@testing-library/react';
import { setupStore } from '../../store/store';
import CoursesList from './Courses';
import { Provider } from 'react-redux';

describe('Testing Home page', () => {
  test('renders Courses page', () => {
    render(
      <Provider store={setupStore()}>
        <CoursesList />
      </Provider>
    );
    const postTitle = screen.getByTestId('courses-page');
    expect(postTitle).toBeInTheDocument();
  });
})
