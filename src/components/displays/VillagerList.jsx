import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagerList = ({ villagers }) => (
  <ul aria-label="villagers">
    {villagers.map((villager) => (
      <li key={villager.id}>
        <Villager
          name={villager.name}
          image={villager.image}
          gender={villager.gender}
          quote={villager.quote}
          birthday={villager.birthday}
        />
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
      gender: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default VillagerList;
