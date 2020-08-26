import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const { titleForm, inputForm } = styles;

const ContactFilter = ({ value, onChangeFilter }) => (
  <>
    <p className={titleForm}>Find contacts by name</p>
    <input
      className={inputForm}
      type="text"
      placeholder="Search.."
      value={value}
      onChange={({ target }) => onChangeFilter(target.value)}
    ></input>
  </>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
