import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    ContactsAPI.getAll().then(contacts =>
      this.setState(() => ({
        contacts
      }))
    );
  }

  removeContact = contactToRemove => {
    ContactsAPI.remove(contactToRemove);

    this.setState(currentState => ({
      contacts: currentState.contacts.filter(
        contact => contact.id !== contactToRemove.id
      )
    }));
  };

  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
