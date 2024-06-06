import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';
import { useTheme } from './ThemeContext';
import { ThemeProvider } from './ThemeContext';

jest.mock('./ThemeContext');

describe('Header Component', () => {
  test('renders with light theme', () => {
    useTheme.mockReturnValueOnce({ theme: 'light', toggleTheme: jest.fn() });

    const { getByText, getByRole, container } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    console.log(container.innerHTML);

    expect(getByText('Switcher-App')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });

  test('toggles theme when button is clicked', () => {
    const toggleThemeMock = jest.fn();
    useTheme.mockReturnValueOnce({ theme: 'light', toggleTheme: toggleThemeMock });

    const { getByRole, container } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    console.log(container.innerHTML);

    fireEvent.click(getByRole('button'));
    expect(toggleThemeMock).toHaveBeenCalled();
  });
});

