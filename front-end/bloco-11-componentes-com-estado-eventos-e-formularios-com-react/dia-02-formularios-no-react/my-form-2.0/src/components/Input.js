import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    labelText, type, name, value, maxLength, isTextarea, onInputChange, onInputBlur, onMouseEnter,
  } = props;
  return (
    <div className="input-field">
      <label htmlFor={name}>{labelText}</label>
      {isTextarea
        ? (
          <textarea
            type={type}
            name={name}
            id={name}
            value={value}
            maxLength={maxLength}
            onChange={onInputChange}
            onMouseEnter={onMouseEnter}
            required
          />
        )
        : (
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            maxLength={maxLength}
            onChange={onInputChange}
            onBlur={onInputBlur}
            required
          />
        )}
    </div>
  );
}

Input.defaultProps = {
  isTextarea: false,
  onInputBlur: () => {},
  onMouseEnter: () => {},
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  isTextarea: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onInputBlur: PropTypes.func,
  onMouseEnter: PropTypes.func,
};

export default Input;
