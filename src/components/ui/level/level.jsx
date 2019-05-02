import React, { Component } from "react";

import { LevelContainer, CuteIcon } from "./level.style";

export class Level extends Component {
  getLevel() {
    let level = [];

    for (let index = 0; index < this.props.level; index++) {
      level.push(<CuteIcon key={index} />);
    }

    return level;
  }

  render() {
    return <LevelContainer>{this.getLevel()}</LevelContainer>;
  }
}

export default Level;
