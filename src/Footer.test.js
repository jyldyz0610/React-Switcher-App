import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('© 2024 App')).toBeInTheDocument();
  });
});