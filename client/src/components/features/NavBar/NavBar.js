import React from 'react';
//import './NavBar.scss';
import MainMenu from '../../layouts/MainMenu/MainMenu';
//import Logo from '../../common/Logo/Logo';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { path: '/', title: 'Home' },
        { path: '/regulamin', title: 'Regulamin' },
        { path: '/contact', title: 'Kontakt' },
      ]
    };
  }

  render() {
    const { links } = this.state;

    return (
      <nav className="navbar">
        <span>Logo</span>
        <MainMenu links={links} />
      </nav>
    );
  }

}

export default NavBar;
