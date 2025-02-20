import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Global Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Set Default Styles */
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease-in-out;
  }

  /* Default Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  /* Button Styles */
  button {
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.buttonText};
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

export default GlobalStyles;
