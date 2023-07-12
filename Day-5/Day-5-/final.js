import React from 'react';
import Nav from './Home1';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from '../login/SignUp';
import SignIn from '../login/SignIn';
 import Navv from '../App'
export default function final() {
    return (
        <Router>
        <div>
        <Nav />
        <Switch>
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/navv' component={Navv} />
        </Switch>
        </div>
        </Router>
    );
}
