import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import * as actions from '../../state/actions/authTokenAction';
import * as actions1 from '../../state/actions/profileAction';
import { useAuth0 } from '@auth0/auth0-react';
import { getProfileData } from '../../api/index';

const PrivateRoute = ({ component, ...args }) => {
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  // issue with .envs - there's an extra slash on http://localhost:8080, making things be wonky (http://localhost:8080/ needs to become http://localhost:8080)
  useEffect(() => {
    if (!args.token) {
      getAccessTokenSilently()
        .then(token => {
          args.setAuthToken(token);
          //you will eventually change this hard-coded 1 in the getProfileData function to "user.sub"
          //The model for getProfileData only finds by Id, it does not create a profile, (which is want we want here)
          //We may need another route that will create it.  Not sure what Jake/Ash wanna do.
          getProfileData(1, isAuthenticated, args.authToken)
            .then(res => args.setProfile(res))
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
    //getAccessTokenSilently, isAuthenticated, user, args
    //removed from dependency array - nothing seems to break, but keeping here just in case.
  }, []);

  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => 'Loading...',
      })}
      {...args}
    />
  );
};

export default connect(st => st, { ...actions, ...actions1 })(PrivateRoute);

//grab user object from auth0 --done
//build funciton in api file that grabs profile
//call function here when you get jwt
//set profile into redux
