import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSelection } from "../../redux/actions/ui-action";

import Card from "../ui/card/card";

import {
  PokemonDexContainer,
  Header,
  CardsContainer,
  Buttom,
  ButtomButton
} from "./pokemon-dex.style";

export class PokemonDex extends Component {
  getCards() {
    let cards = this.props.Dex.map(p => {
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
          <ButtomButton onClick={this.props.toggleSelection} />
        </Buttom>
      </PokemonDexContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    Dex: state.Pokemon.Dex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSelection: () => dispatch(toggleSelection())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDex);
