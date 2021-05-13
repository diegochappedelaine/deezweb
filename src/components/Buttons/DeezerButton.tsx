import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 2rem;
  background: white;
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

  @media (max-width: 900px) {
    max-width: 300px;
    width: 100%;
    margin-bottom: 24px;
    font-size: 1.6rem;
  }

  transition: all 100ms cubic-bezier(0.64, 0.04, 0.35, 1);
`;

interface IDeezerButton {
  link: string;
  style?: React.CSSProperties;
  content?: string;
}

const DeezerButton: React.FC<IDeezerButton> = ({
  link,
  style,
  content = "Display on Deezer",
  children,
}) => {
  return (
    <Button style={style} onClick={() => window.open(link, "_blank")}>
      {children ? children : content}
    </Button>
  );
};

export default DeezerButton;
