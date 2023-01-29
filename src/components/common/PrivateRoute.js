import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import * as actions from '../../state/actions/authTokenAction';
import * as actions1 from '../../state/actions/profileAction';
import { useAuth0 } from '@auth0/auth0-react';
//import { getProfileData } from '../../api/index';

const PrivateRoute = ({ component, ...args }) => {
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const { setAuthToken, token, setProfile } = args;

  useEffect(() => {
    if (!token) {
      getAccessTokenSilently()
        .then(token => {
          setAuthToken(token);
          //you will eventually change this hard-coded 1 in the getProfileData function to "user.sub"
          //The model for getProfileData only finds by Id, it does not create a profile, (which is want we want here)
          //We may need another route that will create it.  Not sure what Jake/Ash wanna do.
          if (!user) {
            return;
          }

          // setProfile(user);

          setProfile({
            email: user.email,
            name: user.name,
            id: user.sub,
          });

          // getProfileData(user.sub, isAuthenticated, args.token)
          // This is Trying to gather user information from our own api but now Auth0 is responsible for giving us the information about the user.
          //   .then(res => {
          //     args.setProfile(res);
          //     console.log(args);
          //   })
          //   .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  }, [
    getAccessTokenSilently,
    isAuthenticated,
    user,
    token,
    setAuthToken,
    setProfile,
  ]);

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
