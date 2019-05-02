import React, { Component } from "react";

import axios from "axios";

import Card from "../ui/card/card";

import {
  PokemonDexContainer,
  Header,
  CardsContainer,
  Buttom,
  ButtomButton
} from "./pokemon-dex.style";

export class PokemonDex extends Component {
  state = {
    PokemonDex: []
  };

  componentDidMount() {
    axios.get("http://localhost:3030/api/cards?limit=20").then(res => {
      this.setState({
        PokemonDex: res.data.cards
      });
    });
  }

  getCards() {
    let cards = this.state.PokemonDex.map(p => {
      return <Card key={p.id} card_info={p} type="x" cpr={2} />;
    });

    return cards;
  }

  render() {
    return (
      <PokemonDexContainer>
        <Header />
        <CardsContainer>{this.getCards()}</CardsContainer>
        <Buttom>
          <ButtomButton />
        </Buttom>
      </PokemonDexContainer>
    );
  }
}

export default PokemonDex;
