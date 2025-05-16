import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-abw6ev1k8fr1wib2.eu.auth0.com" // Replace with your Auth0 domain
      clientId="18jNQKpq12FnvpGXPz3hirE3aFARMXFw" // Replace with your Auth0 client ID
      authorizationParams={{
        redirect_uri: window.location.origin + '/dashboard'
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);