import React, {Component} from 'react';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Home, LeftNav, About, Projects} from './components';

class Routes extends Component {
  render() {
    return (
      <div id="routes-div">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <LeftNav />
      </div>
    );
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
