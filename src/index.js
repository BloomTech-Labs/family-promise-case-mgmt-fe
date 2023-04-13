// this is a comment
import 'antd/dist/antd.less';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setUser } from './state/features/user/userSlice';
import { store } from './state/store';

import { ClientIntakeForm } from './components/common/ClientIntakeForm';
import { Calendar } from './components/pages/Calendar';
import { CaseDetails } from './components/pages/CaseDetails';
import { Dashboard } from './components/pages/Dashboard';
import { Cases } from './components/pages/Cases';
import { CaseView } from './components/pages/CaseView';
import { ExampleListPage } from './components/pages/ExampleList';
import { LayoutTemplate } from './components/pages/LayoutTemplate';
import { NotFoundPage } from './components/pages/NotFound';
import { ProfileListPage } from './components/pages/ProfileList';
import { TempLandingPage } from './components/pages/TempLandingPage';
import { PrintNotes } from './components/common/CaseDetails/printNotes';
import { RecentCases } from './components/pages/RecentCases';
import { Finaces } from './components/common/FinancesIntake';
import { Resources } from './components/pages/Resources';

import DashHeader from './components/common/DashHeader';
import { RecentCases } from './components/pages/RecentCases';

import './styles/css/styles.css';

import { useAuth0 } from '@auth0/auth0-react';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
import { Finances } from './components/common/FinancesIntake';
import PrivateRoute from './components/common/PrivateRoute';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user]);

  return (
    <Switch>
      <Route exact path="/" component={TempLandingPage} />
      <Route exact path="/finances" component={Finances} />
      {/* any of the routes you need secured should be registered as PrivateRoutes */}
      <PrivateRoute path="/cases/:caseID" component={CaseView} />
      <PrivateRoute path="/case-details" component={CaseDetails} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/cases" component={Cases} />{' '}
      <PrivateRoute
        path="/:clientID/client-intake-form/"
        component={ClientIntakeForm}
      />
      <PrivateRoute path="/profile-list" component={ProfileListPage} />
      <PrivateRoute path="/example-list" component={ExampleListPage} />
      <PrivateRoute path="/layouttemplate" component={LayoutTemplate} />
      <PrivateRoute path="/" exact />
      <PrivateRoute path="/dashheader" component={DashHeader} />
      <PrivateRoute path="/calendar" component={Calendar} />
      <PrivateRoute path="/recent-cases" component={RecentCases} />
      <PrivateRoute path="/resources" component={Resources} />
      <PrivateRoute component={NotFoundPage} />
    </Switch>
  );
}
