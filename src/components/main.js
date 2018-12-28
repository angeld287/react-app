// eslint-disable-next-line
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import SignIn from './signin';
import SignUpEmpresa from './signupempresa';
import SignUpCliente from './signupcliente';
/* const currectSession = App.state.currectSession === null;
console.log(App.state.currectSession); */
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signupempresa" component={SignUpEmpresa} />
    <Route path="/signupcliente" component={SignUpCliente} />
  </Switch>
)

export default Main;
