import React, { Component } from 'react';
import Contact from '../contacts/Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (<div>
            <h1 className="text-danger">Contact List</h1>
            {contacts.map(contact => (
              <Contact
                key={contact.id}
                contact={contact}
              />
            ))}

          </div>)
        }}
      </Consumer>
    )



  }
}

export default Contacts;