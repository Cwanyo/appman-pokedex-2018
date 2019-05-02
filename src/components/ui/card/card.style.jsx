import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #f3f4f7;

  margin: 5px;
  padding: 10px;

  display: flex;
  flex-wrap: row;

  flex: 0 0
    calc((100% - (${props => props.cpr} * 2 * 15px)) / ${props => props.cpr});

  height: 250px;

  box-shadow: 0px 0px 5px #d5d6dc;

  :hover {
    box-shadow: 4px 4px 1px #aeaeae;
  }
`;

export const CardImg = styled.img`
  display: block;

  height: 100%;
`;

export const CardContent = styled.div`
  position: relative;

  flex-grow: 1;

  padding: 10px;

  display: flex;
  flex-flow: column;
`;

export const CardTitle = styled.h1`
  font-size: 20px;
  color: ${props => props.color || "black"};
`;

export const CardButton = styled.div`
  display: none;

  color: #dc7777;
  position: absolute;
  overflow: hidden;

  top: 0px;
  right: 0px;

  height: 40px;
  width: 40px;

  cursor: pointer;

  ::after {
    content: "${props => props.icon}";
    font-size: 60px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  ${CardContainer}:hover &{
    display: block;
  }
`;
