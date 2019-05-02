import React, { Component } from "react";

import PokemonDex from "./pokemon-dex/pokemon-dex";

import { AppContainer } from "./App.style";
import PokemonSelection from "./pokemon-selection/pokemon-selection";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <PokemonSelection />
        <PokemonDex />
      </AppContainer>
    );
  }
}

export default App;
