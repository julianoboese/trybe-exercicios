import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    labelText, type, name, value, maxLength, onInputChange, onInputBlur,
  } = props;
  return (
    <div className="input-field">
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        name={name}
        value={value}
        maxLength={maxLength}
        onChange={onInputChange}
        onBlur={onInputBlur}
      />
    </div>
  );
}

Input.defaultProps = {
  onInputBlur: () => {},
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInputBlur: PropTypes.func,
};

export default Input;
