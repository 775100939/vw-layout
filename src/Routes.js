import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import loadable from '@loadable/component';

const Layout = loadable(() => import('./Layout'));
const InviteCode = loadable(() => import('./pages/Personal/InviteCode'));
const Login = loadable(() => import('./pages/User/Login'));
const Register = loadable(() => import('./pages/User/Register'));

export default class Routes extends Component {
  render() {
    return (<Router>
      <Switch>
        <Route exact path='/' component={Layout}/>
        <Route path='/result' component={Layout}/>
        <Route path='/follow' component={Layout}/>
        <Route path='/lottery' component={Layout}/>
        <Route exact path='/personal' component={Layout}/>
        <Route path='/personal/invitecode' component={InviteCode}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>

      </Switch>
    </Router>)
  }
}
