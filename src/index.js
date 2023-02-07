// this is a comment
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state';
import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { Cases } from './components/pages/Cases';
import { CaseView } from './components/pages/CaseView';
import { ClientIntakeForm } from './components/common/ClientIntakeForm';
import { LayoutTemplate } from './components/pages/LayoutTemplate';
import { CaseDetails } from './components/pages/CaseDetails';
import { Calendar } from './components/pages/Calendar';
import { TempLandingPage } from './components/pages/TempLandingPage';
import { Finaces } from './components/common/FinancesIntake';

import { RecentCases } from './components/pages/RecentCases';
import DashHeader from './components/common/DashHeader';

import './styles/css/styles.css';

import PrivateRoute from './components/common/PrivateRoute';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
import { Finances } from './components/common/FinancesIntake';

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
  return (
    <Switch>
      <Route exact path="/" component={TempLandingPage} />
      <Route exact path="/finances" component={Finances} />
      {/* any of the routes you need secured should be registered as PrivateRoutes */}
      <PrivateRoute path="/cases/:caseID" component={CaseView} />
      <PrivateRoute path="/case-details" component={CaseDetails} />
      <PrivateRoute path="/cases" component={Cases} />{' '}
      <PrivateRoute path="/client-intake-form" component={ClientIntakeForm} />
      <PrivateRoute path="/profile-list" component={ProfileListPage} />
      <PrivateRoute path="/example-list" component={ExampleListPage} />
      <PrivateRoute path="/layouttemplate" component={LayoutTemplate} />
      <PrivateRoute path="/" exact />
      <PrivateRoute path="/dashheader" component={DashHeader} />
      <PrivateRoute path="/calendar" component={Calendar} />
      <PrivateRoute path="/recent-cases" component={RecentCases} />
      <PrivateRoute component={NotFoundPage} />
    </Switch>
  );
}
