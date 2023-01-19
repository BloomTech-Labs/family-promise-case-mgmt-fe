import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import TempLandingPage from '../components/pages/TempLandingPage/TempLandingPage.js';

describe('<LoginContainer /> test suite', () => {
  const userTesting = {
    username: 'bear001@maildrop.cc',
    password: 'Test001Test',
  };

  const { getByTestId } = render(
    <Router>
      <TempLandingPage />
    </Router>
  );

  test('sign in widget mounts successfully', () => {
    expect(getByTestId('loginBtn')).toHaveTextContent(/log in/i);
  });

  test('user can log in', async () => {
    waitFor(() => fireEvent.click(screen.getByText(/log out/i))).then(() => {
      waitFor(() => fireEvent.click(screen.getByText(/log in/i))).then(
        async () => {
          await waitFor(() =>
            fireEvent.paste(
              userTesting.username,
              screen.getByText(/email address/i)
            )
          );
          await waitFor(() =>
            fireEvent.paste(userTesting.password, screen.getByText(/password/i))
          );
          waitFor(() => fireEvent.click(screen.getByText(/continue/i))).then(
            () => {
              expect(screen.getByText(/doe, john/i)).toHaveTextContent(
                'Doe, John'
              );
            }
          );
        }
      );
    });
  });
});
