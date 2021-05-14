import React, { useState } from "react";
import styled from "styled-components";

import { FavoriteStar } from "assets/svg";

const Button = styled.button<{ isCoverReversed: boolean }>`
  position: absolute;
  background: white;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  bottom: 24px;
  border: none;
  ${({ isCoverReversed }) => `
    left: ${isCoverReversed ? "unset" : "24px"};
    right: ${isCoverReversed ? "24px" : "unset"};
  `}
  display: grid;
  place-items: center;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  transform: scale(1);

  &:active {
    background-color: #d5d5d0;
    transform: scale(0.98);
  }

  &:hover {
    box-shadow: 0 0 3px 0 rgb(0 0 0 / 60%);
  }
  transition: transform 100ms cubic-bezier(0.64, 0.04, 0.35, 1);
`;

interface IRoundedButton {
  onClick: () => void;
  isCoverReversed: boolean;
  isFavorite: boolean;
}

const RoundedButton: React.FC<IRoundedButton> = ({
  onClick,
  isCoverReversed,
  isFavorite,
}) => {
  const [favoriteTrack, setFavoriteTrack] = useState<boolean>(isFavorite);
  return (
    <Button
      onClick={() => {
        onClick();
        setFavoriteTrack(!favoriteTrack);
      }}
      isCoverReversed={isCoverReversed}
    >
      <FavoriteStar isFavorite={favoriteTrack} />
    </Button>
  );
};

export default RoundedButton;
