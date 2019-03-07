import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

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
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onRemoveContact={this.removeContact}
            />
          )}
        />

        <Route path="/create" component={CreateContact} />
      </div>
    );
  }
}

export default App;
