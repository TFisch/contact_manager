import React, { Component } from 'react'

class AddContact extends Component {

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    }
  }

  render() {
    const { name, email, phone } = this.state
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={name} className="form-control form-control-lg" placeholder="Enter Name..." onChange={this.handleChange} ref={this.nameInput} />
              <label htmlFor="name">Email</label>
              <input type="email" name="email" value={email} className="form-control form-control-lg" placeholder="Enter Email..." onChange={this.handleChange} ref={this.emailInput} />
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" value={phone} className="form-control form-control-lg" placeholder="Enter Phone..." onChange={this.handleChange} ref={this.phoneInput} />
            </div>
            <input type="submit" className="btn btn-block btn-light" value="Add Contact" />
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;
