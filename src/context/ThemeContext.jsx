import  { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

export const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};


ThemeProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProviderWrapper;
