import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const { inputForm } = styles;

const ContactFilter = ({ value, onChangeFilter }) => (
  <>
    <input
      className={inputForm}
      type="text"
      placeholder="Search"
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
