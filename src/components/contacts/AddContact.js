import React, { Component } from 'react'
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (dispatch, event) => {
    event.preventDefault();

    const { name, email, phone } = this.state;

    if (name === '') {
      this.setState({ errors: { name: 'name is required' } })
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'email is required' } })
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'phone is required' } })
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }

    dispatch({ type: 'ADD_CONTACT', payload: newContact })

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })

    this.props.history.push('/');
  }

  render() {
    const { name, email, phone, errors } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.handleChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.handleChange}
                    error={errors.phone}
                  />
                  <input type="submit" className="btn btn-block btn-light" value="Add Contact" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;
