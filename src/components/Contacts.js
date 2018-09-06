import React, { Component } from 'react';
import Contact from '../components/Contact';

class Contacts extends Component {
  constructor() {
    super()
    this.state = {
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
      ]
    }
  }
  render() {
    const { contacts } = this.state
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}

      </div>
    )
  }
}

export default Contacts;