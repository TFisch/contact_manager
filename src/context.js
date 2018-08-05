import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '666-666-6666'
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'KSmith@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'HJohnson@gmail.com',
        phone: '666-346-2366'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
