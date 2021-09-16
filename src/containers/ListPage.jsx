import React, { Component } from 'react';
import VillagerList from '../components/displays/VillagerList';
import { getVillagers } from '../services/animalCrossingAPI';

export default class ListPage extends Component {
  state = {
    loading: true,
    villagers: [],
  };

  async componentDidMount() {
    const villagers = await getVillagers();
    this.setState({ villagers, loading: false });
  }

  render() {
    return (
      <div>
        <h3>Villager List</h3>
        {this.state.loading ? (
          <p>Loading!</p>
        ) : (
          <VillagerList villagers={this.state.villagers} />
        )}
      </div>
    );
  }
}
