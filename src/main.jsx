import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProviderWrapper from '@context/ThemeContext'; // Import ThemeProvider

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProviderWrapper>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProviderWrapper>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
