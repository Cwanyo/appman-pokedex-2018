import styled from "styled-components";

export const BarContainer = styled.div`
  display: flex;
  flex-flow: row;
  margin: 5px 0;
`;

export const BarTitle = styled.div`
  margin: auto;
  width: 60px;
`;

export const ProgressContainer = styled.div`
  background-color: #e4e4e4;

  flex-grow: 1;
  height: 30px;
  border-radius: 15px;
`;

export const Progress = styled.div`
  background-color: #f3701a;

  height: 100%;
  width: ${props => props.percent || 0}%;
  border-radius: 15px;
`;
