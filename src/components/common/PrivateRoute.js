import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import * as actions from '../../state/actions/authTokenAction';
import { useAuth0 } from '@auth0/auth0-react';
import { getProfileData } from '../../api/index';

const PrivateRoute = ({ component, ...args }) => {
  const { getAccessTokenSilently, user } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently()
      .then(token => {
        args.getAuthToken(token);
        getProfileData(token)
          .then(result => console.log(result))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [getAccessTokenSilently, args]);

  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => 'Loading...',
      })}
      {...args}
    />
  );
};

export default connect(st => st, actions)(PrivateRoute);

//grab user object from auth0
//build funciton in api file that grabs profile
//call function here when you get jwt
//set profile into redux
