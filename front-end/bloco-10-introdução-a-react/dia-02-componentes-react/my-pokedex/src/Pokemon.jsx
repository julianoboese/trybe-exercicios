import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  const { pokemon } = props;
  const {
    name, type, averageWeight, image,
  } = pokemon;
  const { value, measurementUnit } = averageWeight;

  return (
    <div className="card">
      <section>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <h3>
          Average Weight:
          {' '}
          {value}
          {' '}
          {measurementUnit}
        </h3>
      </section>
      <img src={image} alt={name} />
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
