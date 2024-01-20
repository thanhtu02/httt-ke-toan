import './index.css'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import DataProvider from './context/dataContext';

const rootElement = createRoot(document.getElementById('root'));

rootElement.render(
  <Auth0Provider
    domain="dev-l47lr1tjx3vifoxy.us.auth0.com"
    clientId="zOJSHfzzpLxfkgByttaKgbAFXfipdTRE"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <DataProvider>
      <App />
    </DataProvider>
  </Auth0Provider>
);
