import styled, { css } from "styled-components";

export const Layout = styled.div`
  padding: 0 100px 0 100px;
`;

export const CHeaderH1 = styled.h1`
  text-align: center;
`;

export const HeaderH2 = styled.h3`
  text-align: left;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background: #dddccc;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background: blue;
      color: white;
    `}
`;
