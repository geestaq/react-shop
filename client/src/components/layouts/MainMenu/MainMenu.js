import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
//import './MainMenu.scss';

const MainMenu = ({ links, location }) => (
  <ul className="main-menu">
    { links.map((link, index) =>
      <li key={index}>
        <NavLink exact to={link.path} activeClassName='active'>{link.title}</NavLink>
      </li>
    )}
  </ul>
);

MainMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

export default withRouter(props => <MainMenu {...props}/>);
