import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Create the root of the application and mount it into the DOM.
// We wrap the App component in BrowserRouter to enable client side routing.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.PROD ? "/umamusume_sound" : ""}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);