import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    labelText, type, name, value, maxLength,
  } = props;
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input type={type} name={name} value={value} maxLength={maxLength} />
    </div>
  );
}

Input.propTypes = {};

export default Input;
