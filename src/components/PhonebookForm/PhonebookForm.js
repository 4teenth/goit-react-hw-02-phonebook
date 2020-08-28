import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './PhonebookForm.module.css';

const { form, input, inputLabel, addBtn } = styles;

export default class PhonebookForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: this.props.name,
    number: this.props.number,
  };

  nameId = shortid.generate();
  numberId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    if (!isNaN(name)) {
      alert('Invalid Contact Name');
      return;
    }
    if (isNaN(number)) {
      alert('Invalid Contact Number');
      return;
    }

    // const { name, number } = this.state;
    // this.props.onAddContact(name, number);
    // OR (was taken the state with all properties)
    this.props.onAddContact(this.state);

    this.setState({
      name: '',
      number: '',
    });
    // OR call RESET and use method below, but the same is above
    // this.reset();
  };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  render() {
    const { name, number } = this.state;
    // const nameId = shortid.generate();
    // const numberId = shortid.generate();

    return (
      <>
        <form className={form} onSubmit={this.handleSubmit}>
          <label className={inputLabel} htmlFor={this.nameId}>
            Name:
            {/* if put <input> not inside <label> it's more comfortable to write styles for these ones */}
            <input
              className={input}
              type="text"
              placeholder=" First/Last name"
              value={name}
              onChange={this.handleChange}
              name="name"
              id={this.nameId}
              required
              // required - checking the form until sending - https://developer.mozilla.org/ru/docs/Learn/HTML/Forms/%D0%92%D0%B0%D0%BB%D0%B8%D0%B4%D0%B0%D1%86%D0%B8%D1%8F_%D1%84%D0%BE%D1%80%D0%BC%D1%8B
            />
          </label>
          <label className={inputLabel} htmlFor={this.numberId}>
            Number:
            <input
              className={input}
              type="text"
              placeholder=" +380-XX-..."
              value={number}
              onChange={this.handleChange}
              name="number"
              id={this.numberId}
              required
            />
          </label>
          <button type="submit" className={addBtn}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
