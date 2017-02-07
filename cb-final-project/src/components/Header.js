import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h2>"This is the App Name"</h2>
        <button className="btn login">Login</button>
      </div>
    )
  }
}

export default Header;
