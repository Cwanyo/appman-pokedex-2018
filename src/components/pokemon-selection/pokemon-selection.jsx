import React, { Component } from "react";

import axios from "axios";

import Card from "../ui/card/card";
import SearchBar from "../ui/search-bar/search-bar";

import {
  PokemonSelectionContainer,
  PopUpInner,
  CardsContainer
} from "./pokemon-selection.style";

export class PokemonSelection extends Component {
  state = {
    PokemonSelection: []
  };

  componentDidMount() {
    axios.get("http://localhost:3030/api/cards?limit=20").then(res => {
      this.setState({
        PokemonSelection: res.data.cards
      });
    });
  }

  getCards() {
    let cards = this.state.PokemonSelection.map(p => {
      return <Card key={p.id} card_info={p} type="+" cpr={1} />;
    });

    return cards;
  }

  render() {
    return (
      <PokemonSelectionContainer>
        <PopUpInner>
          <SearchBar placeholder="Find Pokemon.." />
          <CardsContainer>{this.getCards()}</CardsContainer>
        </PopUpInner>
      </PokemonSelectionContainer>
    );
  }
}

export default PokemonSelection;
