import React from "react";
import { CardContainer } from "./styles";

const Card = ({ card, onSelect, ...rest }) => {
  const onCardClick = () => {
    onSelect && onSelect(card);
  };
  return (
    <CardContainer onClick={onCardClick} {...rest}>
      <p>Device Name: {card.deviceName}</p>
      <p>Status: {card.status}</p>
      <p>OS: {card.operatingSystem}</p>
      <p>IP: {card.ipAddress}</p>
    </CardContainer>
  );
};

export default Card;
