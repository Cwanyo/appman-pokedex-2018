import React, { Component } from "react";

import { SearchBarContainer } from "./search-bar.style";

export class SearchBar extends Component {
  render() {
    return <SearchBarContainer placeholder="Find Pokemon.." />;
  }
}

export default SearchBar;
