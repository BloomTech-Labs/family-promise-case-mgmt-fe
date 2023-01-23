import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginContainer = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      data-testid="loginBtn"
      onClick={() =>
        loginWithRedirect({
          redirectUri: `${window.location.origin}/case-details`,
        })
      }
    >
      Log In
    </button>
  );
};

export default LoginContainer;
