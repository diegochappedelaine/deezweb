import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1.4rem;
  background: #b26362;
  border: none;
  padding: 8px 24px;
  border-radius: 16px;
  width: fit-content;
  margin-top: 24px;
  margin-left: auto;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 20%);

  &:hover {
    cursor: pointer;
    background: lightgrey;
  }

  &:active {
    transform: scale(0.98);
  }

  transition: all 100ms cubic-bezier(0.64, 0.04, 0.35, 1);
`;

const RemoveFavoriteButton: React.FC<{ onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default RemoveFavoriteButton;
