import React, { Component } from "react";

import { SearchBarContainer } from "./search-bar.style";

export class SearchBar extends Component {
  render() {
    return (
      <SearchBarContainer
        onChange={this.props.onChange}
        placeholder="Find Pokemon.."
      />
    );
  }
}

export default SearchBar;
