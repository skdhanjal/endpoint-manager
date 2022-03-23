import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 10px;
  height: 150px;
  width: 200px;
  border: 2px solid black;
  margin-bottom: 40px;
  cursor: pointer;

  &.selected {
    border-color: palevioletred;
  }
`;
