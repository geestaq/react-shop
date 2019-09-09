import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import './MainMenu.scss';

const MainMenu = ({ links, location }) => (
  <Nav className="main-menu ml-auto" navbar>
    { links.map((link, index) =>
      <NavItem key={index} className={(link.path === location.pathname) ? 'active' : ''}>
        <NavLink exact to={link.path} className='nav-link' activeClassName='active'>{link.title}</NavLink>
      </NavItem>
    )}
  </Nav>
);

MainMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

export default withRouter(props => <MainMenu {...props}/>);
