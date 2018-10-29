import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Catalog from './Components/Catalog/Catalog';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
       <Nav />
       <div className='app'>{ routes }</div>
      </div>
    );
  }
}

export default App;
