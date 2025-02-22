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
    font-family: 'Poppins', sans-serif;
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
    font-weight: 500;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.buttonText};
    padding: 10px 20px;
    border-radius: 6px;
  }

  button:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

export default GlobalStyles;
