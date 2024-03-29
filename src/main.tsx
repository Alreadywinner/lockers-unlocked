import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LocalStorageDataProvider } from '@context';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalStorageDataProvider>
        <App />
      </LocalStorageDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
