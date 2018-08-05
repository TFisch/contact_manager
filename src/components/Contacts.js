import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
