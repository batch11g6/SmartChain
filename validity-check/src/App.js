import React, { Component } from 'react';
import HeaderTemplate from './components/HeaderTemplate'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate />
        <Home />
      </div>
    );
  }
}

export default App;
