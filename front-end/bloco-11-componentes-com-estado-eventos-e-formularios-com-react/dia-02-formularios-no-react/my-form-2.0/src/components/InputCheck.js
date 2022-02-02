import React from 'react';
import PropTypes from 'prop-types';

function InputCheck(props) {
  const {
    labelText, type, name, value, selected, onInputChange,
  } = props;
  return (
    <div className="radio-field">
      <label htmlFor={value}>
        <input
          type={type}
          name={name}
          id={value}
          value={value}
          checked={selected === value}
          onChange={onInputChange}
          required
        />
        {labelText}
      </label>
    </div>
  );
}

InputCheck.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputCheck;
