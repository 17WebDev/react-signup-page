import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import { Navbar, NavItem, Icon } from 'react-materialize';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
<Navbar  className="Nav"brand='17WebDev' right>
  <div>
    <NavItem><Link to={routes.LANDING}>Landing</Link></NavItem>
    <NavItem><Link to={routes.HOME}>Home</Link></NavItem>
    <NavItem><Link to={routes.ACCOUNT}>Account</Link></NavItem>
    <SignOutButton />
    </div>
</Navbar>


const NavigationNonAuth = () =>

  <Navbar className="Navigation" brand='17WebDev' right>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>SignIn</Link> </li>
  </Navbar>



export default Navigation;
