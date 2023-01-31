import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginContainer = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      style={{
        backgroundColor: '#006fba',
        color: 'white',
        borderRadius: '.25rem',
        width: '12rem',
        height: '2.5rem',
        border: '0px',
        marginRight: '1rem',
      }}
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
