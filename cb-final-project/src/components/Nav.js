import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      //Try and use a Bootstrap Nav bar for neatness
      <div className="nav-container">
        <ul className="nav-ul">
          <li className="nav-li">"Home"</li>
          <li className="nav-li">"New Playlist"</li>
          <li className="nav-li">"About"</li>
        </ul>
      </div>
    )
  }
}

export default Nav;
