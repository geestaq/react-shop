import React from 'react';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import { Row, Col } from 'reactstrap';

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
            Copyright by geestaq 2019
          </Col>
          <Col>
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
