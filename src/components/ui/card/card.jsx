import React, { Component } from "react";

import { connect } from "react-redux";
import { addToDex, removeFromDex } from "../../../redux/actions/pokemon-action";

import Bar from "../bar/bar";
import Level from "../level/level";

import {
  CardContainer,
  CardImg,
  CardContent,
  CardTitle,
  CardButton
} from "./card.style";

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
};

export class Card extends Component {
  getHP() {
    let { hp } = this.props.card_info;

    if (typeof hp === "undefined" || isNaN(hp)) {
      return 0;
    }

    return Math.min(hp, 100);
  }

  getSTR() {
    let { attacks } = this.props.card_info;

    if (typeof attacks === "undefined") {
      return 0;
    }

    return Math.min(attacks.length * 50, 100);
  }

  getWEAK() {
    let { weaknesses } = this.props.card_info;

    if (typeof weaknesses === "undefined") {
      return 0;
    }

    return Math.min(weaknesses.length * 100, 100);
  }

  getDamage() {
    let { attacks } = this.props.card_info;

    if (typeof attacks === "undefined") {
      return 0;
    }

    let dmg = 0;

    attacks.forEach(atk => {
      if (typeof atk.damage !== "undefined") {
        dmg += parseInt(atk.damage, 10) || 0;
      }
    });

    return dmg;
  }

  getLevel() {
    // TOFIX - Happiness level calculation ((hp / 10) + (damage /10 ) + 10 - (weak/???)) / 5
    let level = Math.ceil(
      (this.getHP() / 10 + this.getDamage() / 10 + 10 - this.getWEAK() / 10) / 5
    );

    return level;
  }

  handleAction = () => {
    if (this.props.type === "x") {
      this.props.removeFromDex(this.props.card_info.id);
    } else if (this.props.type === "+") {
      this.props.addToDex(this.props.card_info.id);
    }
  };

  render() {
    const { card_info } = this.props;

    return (
      <CardContainer cpr={this.props.cpr}>
        <CardImg src={card_info.imageUrl} />
        <CardContent>
          <CardButton onClick={this.handleAction} icon={this.props.type} />
          <CardTitle color={COLORS[card_info.type]}>{card_info.name}</CardTitle>
          <Bar title="HP" percent={this.getHP()} />
          <Bar title="STR" percent={this.getSTR()} />
          <Bar title="WEAK" percent={this.getWEAK()} />
          <Level level={this.getLevel()} />
        </CardContent>
      </CardContainer>
    );
  }
}

const mapDispathToState = dispatch => {
  return {
    addToDex: id => dispatch(addToDex(id)),
    removeFromDex: id => dispatch(removeFromDex(id))
  };
};

export default connect(
  null,
  mapDispathToState
)(Card);
