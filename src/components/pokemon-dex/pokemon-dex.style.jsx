import styled from "styled-components";

const ButtomHeight = "80px";
const HeaderHeight = "100px";

export const PokemonDexContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  background-color: whitesmoke;
  position: relative;

  width: 100%;
  height: ${HeaderHeight};

  ::after {
    content: "My Pokedex";
    font-size: 50px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CardsContainer = styled.div`
  height: calc(100% - ${ButtomHeight} - ${HeaderHeight});

  overflow: auto;
  padding: 5px;

  display: flex;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Buttom = styled.div`
  background: #ec5656;
  position: relative;

  height: ${ButtomHeight};
  width: 100%;
`;

export const ButtomButton = styled.div`
  background: #ec5656;
  position: relative;

  margin: 0 auto;
  transform: translate(0, -30px);

  border-radius: 50px;
  width: 100px;
  height: 100px;
  box-shadow: 0px 0px 2px 2px #d9333387;

  cursor: pointer;

  ::after {
    color: white;
    font-size: 60px;
    content: "+";

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
