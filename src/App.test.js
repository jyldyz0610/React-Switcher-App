import { render, screen, act } from '@testing-library/react';

import App from './App';

test('renders the App component', () => {
  act(() => {
    render(<App />);
  });
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});
