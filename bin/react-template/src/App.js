import React, { Component } from 'react';
import { HashRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Test from './page/test';

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/" exact render={() => <Redirect to="/Test" />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default withRouter(App);
