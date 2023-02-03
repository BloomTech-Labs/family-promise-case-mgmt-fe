import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutContainer = () => {
  const { logout } = useAuth0();

  return (
    <button
      style={{
        backgroundColor: '#006fba',
        color: 'white',
        borderRadius: '.25rem',
        width: '12rem',
        height: '2.5rem',
        border: '0px',
        marginLeft: '1rem',
      }}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default LogoutContainer;
