import styled from "styled-components";

export const PokemonSelectionContainer = styled.div``;

export const Block = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

export const PopUpInner = styled.div`
  background-color: white;

  position: absolute;

  top: 5%;
  left: 5%;
  right: 5%;
  bottom: 5%;
  z-index: 200;

  display: flex;
  flex-flow: column;
`;

export const CardsContainer = styled.div`
  flex-grow: 1;

  overflow: auto;
  padding: 5px;

  display: flex;
  flex-wrap: wrap;

  /* ::-webkit-scrollbar {
    display: none;
  } */
`;
