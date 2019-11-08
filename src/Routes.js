import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import loadable from '@loadable/component';

const Layout = loadable(() => import('./Layout'));
const InviteCode = loadable(() => import('./pages/personal/InviteCode/'));
const Login = loadable(() => import('./pages/Login'));

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

      </Switch>
    </Router>)
  }
}
