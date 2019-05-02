import styled from "styled-components";

import Cute from "./cute.png";

export const LevelContainer = styled.div`
  flex-grow: 1;

  margin: 5px 0;

  display: flex;
  flex-flow: row;
`;

export const CuteIcon = styled.div`
  background-image: url(${Cute});

  flex: 0 1 40px;

  margin-left: 1px;

  background-size: 100%;
  background-repeat: no-repeat;
`;
