import TempLandingPage from '../components/pages/TempLandingPage/TempLandingPage';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Components render given route', () => {
  test('<TempLandingPage /> is rendering', () => {
    const authService = {
      logout: jest.fn(),
    };

    const { getByText } = render(
      <Router>
        <TempLandingPage authService={authService} />
      </Router>
    );

    const button = getByText(/log out/i);
    userEvent.click(button);
    expect(authService.logout).toHaveBeenCalledTimes(1);
    expect(getByText(/log in/i).toBe('Log In'));
  });
});
