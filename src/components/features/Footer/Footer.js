import React from 'react';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
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
      <div className='footer'>
        <Row>
          <Col>
            <Link to="/" className="logo-link">
              <img src="/images/logo.png" height="50" className="logo" alt="Logo"/>
            </Link>
          </Col>
          <Col className="align-self-center text-center">
            <div className="d-none d-lg-block">
              Copyright by geestaq 2019
            </div>
          </Col>
          <Col className="align-self-center">
            <div className="footer-menu float-right">
              <MainMenu links={links} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }

}

export default Footer;
