import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
uuidv4();

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onHandlerSubmit = (data) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, data],
    }));
  };

  deleteContactById = (e) => {
    const id = e.target.dataset.id;
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  onChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getfilterContact = () => {
    return this.state.contacts.filter((item) =>
      item.contact.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <h2>PhoneBook</h2>
        <ContactForm onHandlerSubmit={this.onHandlerSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        <ContactList
          contacts={contacts}
          deleteContactById={this.deleteContactById}
        />
      </>
    );
  }
}

export default App;
