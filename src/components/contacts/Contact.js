import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      showContactInfo: true
    }
  }

  onShowClick = () => {
    let showContactInfo = !this.state.showContactInfo
    this.setState({ showContactInfo })
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  render() {

    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (

      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>{name}
                <i onClick={this.onShowClick} className="fas fa-sort-down" />
                <i className="fas fa-times" style={{ float: 'right', color: 'red' }} onClick={() => this.onDeleteClick(id, dispatch)}> </i>
              </h4>
              {showContactInfo ? (<ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item ">Phone: {phone}</li>
              </ul>) : null}

            </div>
          )
        }}
      </Consumer>

    )
  }
}

Contact.propTypes = {
  Contact: PropTypes.object.isRequired,
}

export default Contact;