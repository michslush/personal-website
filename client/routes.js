import React, {Component} from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import {Home, LeftNav, About, Contact} from './components';

class Routes extends Component {
  render() {
    return (
      <div id="routes-div">
        <LeftNav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
