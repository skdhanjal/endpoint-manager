import styled, { css } from "styled-components";
import { device } from "../device";

export const Layout = styled.div`
  margin: auto;
  text-align: center;
  padding: 0 20px;

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.laptopL} {
    max-width: 1400px;
  }
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
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media ${device.tablet} {
    justify-content: flex-end;
    margin-right: 40px;
  }

  @media ${device.laptopL} {
    margin-right: 110px;
  }
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

export const GridContainer = styled.div`
  margin-top: 20px;
`;
