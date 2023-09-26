import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { server, auth0domain, auth0clientId } from './config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain = {auth0domain}
    clientId = {auth0clientId}
    authorizationParams={{
      redirect_uri: window.location.origin + "/Dashboard"
    }}>

    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Auth0Provider>

);
