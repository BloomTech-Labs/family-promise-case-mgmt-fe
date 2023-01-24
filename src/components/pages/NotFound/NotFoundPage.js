import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const NotFoundPage = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
      {isAuthenticated && (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default NotFoundPage;
