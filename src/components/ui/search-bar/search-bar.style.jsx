import styled from "styled-components";

import SearchIcon from "./search.png";

export const SearchBarContainer = styled.input`
  padding: 5px;
  margin: 5px;
  font-size: 30px;
  font-family: inherit;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: 100% 50%;
  padding-right: 40px;
`;
