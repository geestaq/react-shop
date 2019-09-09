import React from 'react';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import { FaShoppingCart } from 'react-icons/fa';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      links: [
        { path: '/', title: 'Home' },
        { path: '/rules', title: 'Regulamin' },
        { path: '/contact', title: 'Kontakt' },
        { path: '/cart', title: <FaShoppingCart size={24} /> },
      ]
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { links } = this.state;

    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><img src="/images/logo.png" alt="Logo" /></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <MainMenu links={links} />
        </Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
