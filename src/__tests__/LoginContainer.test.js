import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import LoginContainer from '../components/pages/Login/LoginContainer.js';
import TempLandingPage from '../components/pages/TempLandingPage/TempLandingPage.js';

describe('<LoginContainer /> test suite', () => {
  const { getByTestId } = render(
    <Router>
      <TempLandingPage />
    </Router>
  );

  test('sign in widget mounts successfully', () => {
    expect(getByTestId('loginBtn')).toHaveTextContent(/log in/i);
  });

  test('user can log in', async () => {
    waitFor(() => fireEvent.click(screen.getByText(/log in/i)));

    await waitFor(() => screen.getByText(/doe, john/i));

    expect(screen.getByText(/doe, john/i)).toHaveTextContent('Doe, John');
  });
});
