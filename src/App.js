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
        <div className="container">
          <Contact name="John Doe" email="JD@gmail.com" phone="555-555-5555" />
          <Contact name="Karen Smith" email="KSmith@gmail.com" phone="333-333-1111" />
        </div>
      </div>

    );
  }
}
export default App;
