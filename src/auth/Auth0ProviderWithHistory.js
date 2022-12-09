import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();

  const onRedirectCallback = appState => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain="dev-hz2ks357.us.auth0.com"
      clientId="mQ2HIpRyqF97iuz7V0iPRJ3V0Yo4s82y"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
