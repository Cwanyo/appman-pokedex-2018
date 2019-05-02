import React, { Component } from "react";

import { connect } from "react-redux";

import PokemonDex from "./pokemon-dex/pokemon-dex";
import PokemonSelection from "./pokemon-selection/pokemon-selection";

import { AppContainer } from "./App.style";

class App extends Component {
  render() {
    return (
      <AppContainer>
        {this.props.ShowSelection === true && <PokemonSelection />}
        <PokemonDex />
      </AppContainer>
    );
  }
}

const MapStateToProps = state => {
  return {
    ShowSelection: state.UI.ShowSelection
  };
};

export default connect(MapStateToProps)(App);
