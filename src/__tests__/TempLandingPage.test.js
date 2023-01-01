import React from 'react';
import TempLandingPage from '../components/pages/TempLandingPage/TempLandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { getByText } from '@testing-library/react';

describe('Components render given route', () => {
  test('<TempLandingPage /> is rendering', () => {
    render(
      <Router>
        <TempLandingPage />
      </Router>
    );
    const { element } = getByText(/log in/i);
    expect(element.toBeInTheDocument());
  });
});
