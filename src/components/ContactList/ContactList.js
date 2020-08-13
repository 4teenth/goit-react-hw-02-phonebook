import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const { contactList, contactListItem, contactBtn } = styles;

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    <ul className={contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={contactListItem}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={contactBtn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
