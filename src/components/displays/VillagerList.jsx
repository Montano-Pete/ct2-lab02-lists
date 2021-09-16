import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';
import { Link } from 'react-router-dom';

const VillagerList = ({ villagers }) => (
  <ul aria-label="villagers">
    {villagers.map((villager) => (
      <li key={villager.id}>
        <Link to={`/${villager.id}`}>
          <Villager
            name={villager.name}
            image={villager.image}
          />
        </Link>
      </li>
    ))}
  </ul>
);

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default VillagerList;
