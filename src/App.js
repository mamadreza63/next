import React, { Component } from 'react';
import { HashRouter, Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory as createHistory } from "history";
// import { renderRoutes } from 'react-router-config';

const history = createHistory();

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
import DefaultLayout from './containers/DefaultLayout';

// Pages
import Login from './views/Pages/Login';
import Register from './views/Pages/Register';
import Page404 from './views/Pages/Page404';
import Page500 from './views/Pages/Page500';

class App extends Component {

  render() {
      debugger;
    return (
      <Router history={history}>
            <Switch>
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
      </Router>
    );
  }
}

export default App;
