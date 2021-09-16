import React, { Component } from 'react';
import VillagerDetails from '../components/displays/VillagerDetails';
import { getVillagersId } from '../services/animalCrossingAPI';

export default class DetailPage extends Component {
  state = {
    loading: true,
    villager: {},
  };

  async componentDidMount() {
    const villager = await getVillagersId(this.props.match.params.villager);
    this.setState({ villager, loading: false });
  }

  render() {
    const { loading, villager } = this.state;
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <VillagerDetails
            name={villager.name}
            image={villager.image}
            gender={villager.gender}
            quote={villager.quote}
            birthday={villager.birthday}
          />
        )}
      </div>
    );
  }
}
