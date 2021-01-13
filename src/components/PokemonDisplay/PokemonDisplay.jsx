import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGen1Pokemon } from '../../redux/reducers';

import PokemonCard from '../PokemonCard/PokemonCard';

class PokemonDisplay extends Component {
  async componentDidMount() {
    await this.props.getGen1Pokemon();
    console.log(this.props.gen1);
  }

  render() {
    return (
      <div>
        {this.props.gen1Pokemon.map((pokemon, index) => {
          return (
            <PokemonCard key={index} number={index + 1} name={pokemon.name} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gen1Pokemon: state.pokemonNames,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getGen1Pokemon: () => dispatch(getGen1Pokemon()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDisplay);
