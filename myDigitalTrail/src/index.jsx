import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '../src/hooks/globalContextProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>
)
