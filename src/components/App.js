import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import Section from './Section';
import Notification from './Notification';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default class App extends Component {
  static defaultProps = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-12',
      },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  addContact = newContact => {
    const { name, number } = newContact;
    // the same above = newContact.name / newContact.number
    const { contacts } = this.state;
    const theContact = {
      id: uuidv4.v4(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, theContact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      const { contacts } = prevState;

      return {
        contacts: contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getContactsByFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  // the same with destr
  //   getFilterForContacts = () => {
  //     const { contacts, filter } = this.state;
  //     return contacts.filter(({ name }) =>
  //       name.toLowerCase().included(filter.toLowerCase()),
  //     );
  //   };

  render() {
    const { contacts, filter } = this.state;
    const contactsWithFilter = this.getContactsByFilter();

    return (
      <>
        <Section title="Phonebook">
          <PhonebookForm onAddContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 1 && (
            <ContactFilter value={filter} onChangeFilter={this.changeFilter} />
          )}
          {contacts.length < 1 ? (
            <Notification msg="The contact wasn't added" />
          ) : (
            <ContactList
              contacts={contactsWithFilter}
              onDeleteContact={this.deleteContact}
            />
          )}
        </Section>
      </>
    );
  }
}
