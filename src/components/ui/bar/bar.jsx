import React, { Component } from "react";
import {
  BarContainer,
  BarTitle,
  ProgressContainer,
  Progress
} from "./bar.style";

export class Bar extends Component {
  render() {
    return (
      <BarContainer>
        <BarTitle>{this.props.title}</BarTitle>
        <ProgressContainer>
          <Progress percent={this.props.percent} />
        </ProgressContainer>
      </BarContainer>
    );
  }
}

export default Bar;
