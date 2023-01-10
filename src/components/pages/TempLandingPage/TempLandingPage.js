import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const TempLandingPage = () => {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <>
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
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </>
  );
};

export default TempLandingPage;
