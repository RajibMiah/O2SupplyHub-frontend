import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProviderWrapper from '@/context/ThemeContext';
import LoginModal from '@/components/LoginModel';
import SignupModal from '@/components/SignupModel';
import PasswordForgetModel from '@/components/PasswordForgetModel';

import App from './App';
import Header from '@components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <ThemeProviderWrapper>
               <BrowserRouter>
                  <Header />
                  <App />
                  <LoginModal />
                  <SignupModal />
                  <PasswordForgetModel />
               </BrowserRouter>
            </ThemeProviderWrapper>
         </PersistGate>
      </Provider>
   </React.StrictMode>
);
