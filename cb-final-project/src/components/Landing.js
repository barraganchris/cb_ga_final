import React, { Component } from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

class Landing extends Component {
  render() {
    return (
    // <Header/>
    // <Nav />
      <div className="main-content">
        <h3>"App Name by Me!"</h3>
        <p>"This is where I put the main description of the app"<br/> "This is also how all the page boxes will hopefully be sized"</p>
      </div>
    // <Footer />
    )
  }
}

export default Landing;
