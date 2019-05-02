import React, { Component } from "react";

import { connect } from "react-redux";

import { toggleSelection } from "../../redux/actions/ui-action";
import { searchPokemons } from "../../redux/actions/pokemon-action";

import Card from "../ui/card/card";
import SearchBar from "../ui/search-bar/search-bar";

import {
  PokemonSelectionContainer,
  Block,
  PopUpInner,
  CardsContainer
} from "./pokemon-selection.style";

export class PokemonSelection extends Component {
  componentDidMount() {
    this.props.searchPokemons("");
  }

  getCards() {
    let cards = this.props.Unselect.map(p => {
      return <Card key={p.id} card_info={p} type="+" cpr={1} />;
    });

    return cards;
  }

  handleSearch = e => {
    this.props.searchPokemons(e.target.value);
  };

  render() {
    return (
      <PokemonSelectionContainer>
        <Block onClick={this.props.toggleSelection} />
        <PopUpInner>
          <SearchBar
            onChange={this.handleSearch}
            placeholder="Find Pokemon.."
          />
          <CardsContainer>{this.getCards()}</CardsContainer>
        </PopUpInner>
      </PokemonSelectionContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    Unselect: state.Pokemon.Unselect
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSelection: () => dispatch(toggleSelection()),
    searchPokemons: s => dispatch(searchPokemons(s))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonSelection);
