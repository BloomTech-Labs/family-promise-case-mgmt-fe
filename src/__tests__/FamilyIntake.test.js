import FamilyIntake from '../components/common/FamilyIntake';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// mocking matchmedia to bypass error.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
  
});

describe('<FamilyIntake/> test suite ', () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Sanity Check: renders without error', () => {
    render(<FamilyIntake/>);
  });

  test('All inputs reflect the value the user has typed', () => {
    render(<FamilyIntake/>);
    const inputs = screen.queryAllByRole('textbox');
    inputs.forEach(testField => {
      userEvent.type(testField, 'Hello, this is a test');
      expect(testField).toHaveValue('Hello, this is a test');
    });
  });
});
