import TempLandingPage from '../components/pages/TempLandingPage/TempLandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('Components render given route', () => {
  test('<TempLandingPage /> is rendering', () => {
    const { getByTestId } = render(
      <Router>
        <TempLandingPage />
      </Router>
    );
    expect(getByTestId('loginBtn')).toHaveTextContent(/log in/i);
  });
});
