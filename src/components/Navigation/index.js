import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <Navbar bg="primary" variant="dark">
    <Link to={ROUTES.LANDING}>
      <Navbar.Brand>
        Missing Persons Portal &nbsp;&nbsp;&nbsp;&nbsp;
      </Navbar.Brand>
    </Link>

    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button variant="outline-light">Search</Button>
    </Form>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      {!!authUser.roles[ROLES.ADMIN] && (
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
      )}
      <li>
        <SignOutButton />
      </li>
    </ul>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar bg="primary" variant="dark">
    <Link to={ROUTES.LANDING}>
      <Navbar.Brand>
        Missing Persons Portal &nbsp;&nbsp;&nbsp;&nbsp;
      </Navbar.Brand>
    </Link>
    <Nav className="mr-auto">
      <Link to={ROUTES.SIGN_IN}>
        {' '}
        <Navbar.Brand>&nbsp;&nbsp;&nbsp;login</Navbar.Brand>
      </Link>
    </Nav>
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
);

export default Navigation;
