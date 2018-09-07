import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        name: 'John Doe',
        email: 'JDoe@gmail.com',
        phone: '666 - 666 - 6666',
        id: 1
      },
      {
        name: 'Karen Smith',
        email: 'KSmith@gmail.com',
        phone: '333 - 333 - 3333',
        id: 2
      },
      {
        name: 'Henry Lee',
        email: 'HLee@gmail.com',
        phone: '111 - 222 - 6666',
        id: 3
      }
    ],

    dispatch: action => this.setState(state => reducer(state, action))

  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;