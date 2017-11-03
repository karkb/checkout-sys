import React, { Component } from 'react';
import './App.css';
import Checkout from './checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Checkout</h1>
        </header>
        <Checkout />
      </div>
    );
  }
}

export default App;
