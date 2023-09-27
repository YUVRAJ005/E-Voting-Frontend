import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain = {process.env.REACT_APP_auth0domain}
    clientId = {process.env.REACT_APP_auth0clientId}
    authorizationParams={{
      redirect_uri: window.location.origin + "/Dashboard"
    }}>

    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Auth0Provider>

);
