import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 10px;
  height: 150px;
  width: 180px;
  border: 2px solid black;
  margin-bottom: 40px;
  /* margin-right: 40px; */

  cursor: pointer;

  &.selected {
    border-color: palevioletred;
  }
`;
