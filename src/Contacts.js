import React, { Component } from 'react';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '666-666-6666'
        }
      ]
    };
  }
  render() {
    return <div />;
  }
}

export default Contacts;
