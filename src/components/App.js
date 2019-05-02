import React, { Component } from "react";

import PokemonDex from "./pokemon-dex/pokemon-dex";

import { AppContainer } from "./App.style";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <PokemonDex />
      </AppContainer>
    );
  }
}

export default App;
