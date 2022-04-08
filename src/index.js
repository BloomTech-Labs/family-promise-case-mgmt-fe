// this is a comment
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { Provider } from 'react-redux';
import store from './state';

import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';
import { Cases } from './components/pages/Cases';
import { CaseView } from './components/pages/CaseView';
import { ClientIntake } from './components/common/ClientIntakeForm';
import { LayoutTemplate } from './components/pages/LayoutTemplate';
import { CaseDetails } from './components/pages/CaseDetails';

import './styles/css/styles.css';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute path="/cases/:caseID" component={CaseView} />
        <SecureRoute path="/case-details" component={CaseDetails} />
        <SecureRoute path="/cases" component={Cases} />
        <SecureRoute path="/client-intake-form" component={ClientIntake} />
        <SecureRoute path="/profile-list" component={ProfileListPage} />
        <SecureRoute path="/example-list" component={ExampleListPage} />
        <SecureRoute path="/layouttemplate" component={LayoutTemplate} />
        <SecureRoute path="/" exact />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
