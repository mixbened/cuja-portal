import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Catalog from './Components/Catalog/Catalog';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav />
       { routes }
      </div>
    );
  }
}

export default App;
