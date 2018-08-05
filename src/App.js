import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact
          name="Karen Smith"
          email="kdog@gmail.com"
          phone="555-555-6669"
        />
      </div>
    );
  }
}
export default App;
