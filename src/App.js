import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>The App Component</h1>
      </div>

    );
  }
}
export default App;
