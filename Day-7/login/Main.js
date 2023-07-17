import React, { Component } from 'react'
import Sign1 from './SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sign from './SignIn';
export default class  extends Component {
  render() {
    return (
        <Router>
        <div>
        <Sign1 />
        <Switch>
        <Route path='/s' exact component={Sign} />
        </Switch>
        </div>
        </Router>
    )
  }
}
