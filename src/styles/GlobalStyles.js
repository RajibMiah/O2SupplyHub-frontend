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
    @media print {
          body {
              -webkit-print-color-adjust: exact !important; /* For Safari/Chrome */
              print-color-adjust: exact !important; /* Standard property */
          }

          #invoice-print {
              background: #ffffff !important; /* Ensure white background */
              padding: 20px !important;
          }

          .InvoiceContainer, .Total, .BankDetails, .BillSection {
              background: #f2fdfc !important; /* Ensure background color stays */
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
          }
        }

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
