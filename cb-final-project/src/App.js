import React, { Component } from 'react';
// ABOVE is all imported from React
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Landing from './components/Landing';
// ABOVE are imported Components
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />

          <div className="main-content">
            <Landing />
          </div>

        <Footer />
      </div>
    );
  }
}

export default App;
