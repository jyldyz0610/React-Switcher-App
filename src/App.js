import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const App = () => {
  const { theme } = useTheme();

  return (
    <div data-testid="app" className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;
