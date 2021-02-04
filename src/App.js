import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import {Router, Switch} from 'react-router-dom';
import 'src/components/mixins/chartjs';
import DashboardView from 'src/pages/reports/DashboardView';
import {connect} from 'react-redux';
import theme from 'src/components/theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {PrivateRouteWrapper} from './components/PrivateRouteWrapper';
import {history} from './helpers';
import LoginView from './pages/auth/LoginView';
import {alertActions} from './actions/alert.actions';
import {RouteWrapper} from './components/RouteWrapper';
import MainLayout from './components/layouts/MainLayout';
import DashboardLayout from './components/layouts/DashboardLayout';
import GlobalStyles from './components/GlobalStyles';
import RegisterView from './pages/auth/RegisterView';
import CustomerListView from './pages/customer/CustomerListView';
import ProductListView from './pages/product/ProductListView';
import SettingsView from './pages/settings/SettingsView';
import AccountView from './pages/account/AccountView';

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      // eslint-disable-next-line react/destructuring-assignment
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router history={history}>
          <Switch>
            <PrivateRouteWrapper exact path="/" component={DashboardView} layout={DashboardLayout} />
            <PrivateRouteWrapper path="/dashboard" component={DashboardView} layout={DashboardLayout} />
            <PrivateRouteWrapper path="/customers" component={CustomerListView} layout={DashboardLayout} />
            <PrivateRouteWrapper path="/products" component={ProductListView} layout={DashboardLayout} />
            <PrivateRouteWrapper path="/account" component={AccountView} layout={DashboardLayout} />
            <PrivateRouteWrapper path="/settings" component={SettingsView} layout={DashboardLayout} />
            <RouteWrapper path="/login" component={LoginView} layout={MainLayout} />
            <RouteWrapper path="/register" component={RegisterView} layout={MainLayout} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };

// const App = () => {
//   // const routing = useRoutes(routes);
//
//   return (
//     <Router history={history}>
//       <Switch>
//         <PrivateRouteWrapper exact path="/" component={DashboardView} />
//         <Route path="/login" component={LoginView} />
//         <Route path="/register" component={RegisterView} />
//         <Redirect from="*" to="/" />
//       </Switch>
//     </Router>
//
//   // <ThemeProvider theme={theme}>
//   //   <GlobalStyles />
//   //   {routing}
//   // </ThemeProvider>
//   );
// };
//
// // const AppWrapper = () => {
// //   return (
// //     <Router history={history}>
// //       <App />
// //     </Router>
// //   );
// // };
//
// export default App;
