import React, { Component } from "react";
import PropTypes from "prop-types";

//converting to a function component
// function ListContacts(props){
//     return (<ol className="contact-list">
//     {props.contacts.map((contact) => (
//         <li key={contact.id} className="contact-list-item">
//             <div
//             className="contact-avatar"
//             style={{ backgroundImage: `url(${contact.avatarURL})` }}>

//             </div>
//             <div className="contact-details">
//                 <p>{contact.name}</p>
//                 <p>{contact.handle}</p>
//             </div>
//             <button onClick={() => props.onRemoveContact(contact)}
//                 className="contact-remove">
//                 Remove
//             </button>
//         </li>
//     ))}
// </ol>);
// }

// ListContacts.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onRemoveContact: PropTypes.func.isRequired
// }

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
  };

  render() {
    const { query } = this.state;
    const { contacts, onRemoveContact } = this.props;

    const showingContacts =
      query === ""
        ? contacts
        : contacts.filter(c =>
            c.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-contacts">
        {JSON.stringify(this.state)}
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className="contact-list">
          {showingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(${contact.avatarURL})` }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                onClick={() => onRemoveContact(contact)}
                className="contact-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
