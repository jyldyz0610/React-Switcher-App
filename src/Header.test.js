import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';
import { useTheme } from './ThemeContext';
import { ThemeProvider } from './ThemeContext';

jest.mock('./ThemeContext');

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with light theme', () => {
    useTheme.mockReturnValue({ theme: 'light', toggleTheme: jest.fn() });

    const { getByText, getByRole, container } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    console.log(container.innerHTML); // Debug-Ausgabe des gerenderten HTML

    expect(getByText('Switcher-App')).toBeInTheDocument();
    expect(getByRole('button', { hidden: true })).toBeInTheDocument();
  });

  test('toggles theme when button is clicked', () => {
    const toggleThemeMock = jest.fn();
    useTheme.mockReturnValue({ theme: 'light', toggleTheme: toggleThemeMock });

    const { getByRole, container } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    console.log(container.innerHTML); // Debug-Ausgabe des gerenderten HTML

    fireEvent.click(getByRole('button', { hidden: true }));
    expect(toggleThemeMock).toHaveBeenCalled();
  });
});
