import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

class App extends Component {
  state = {
    contacts: [],
    screen: "create"
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
    const { screen } = this.state;

    return (
      <div>
        {screen === "list" && (
          <ListContacts
            contacts={this.state.contacts}
            onRemoveContact={this.removeContact}
          />
        )}
        {screen === "create" && <CreateContact />}
      </div>
    );
  }
}

export default App;
