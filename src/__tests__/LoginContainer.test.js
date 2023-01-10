import React from 'react';
import { render } from '@testing-library/react';

import LoginContainer from '../components/pages/Login/LoginContainer';

describe('<LoginContainer /> test suite', () => {
  test('sign in widget mounts successfully', () => {
    const { container } = render(<LoginContainer />);
    expect(container.querySelector('#sign-in-widget')).toBeTruthy();
  });
});
