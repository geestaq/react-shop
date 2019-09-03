import React from 'react';
import MainMenu from '../../layouts/MainMenu/MainMenu';

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
        <div className="row">
          <div className="col-md-6">
            Copyright by geestaq 2019
          </div>
          <div className="col-md-6">
            <MainMenu links={links} />
          </div>
        </div>
      </div>
    );
  }

}

export default Footer;
