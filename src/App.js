import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact'
import Contacts from './components/Contacts';
import { Header } from './components/Header';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header branding="contact manager" />
        <Contact />
      </div>

    );
  }
}
export default App;
