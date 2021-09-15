import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ name, image, gender, quote, birthday }) => (
  <>
    <h2>{name}</h2>
    <img src={image} alt={name} />
    <h3>{gender}</h3>
    <p>{birthday}</p>
    <p>{quote}</p>
  </>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired
};

export default Villager;
