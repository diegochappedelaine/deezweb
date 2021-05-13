import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
`;

interface IRoundedButton {
  style?: React.CSSProperties;
  onClick: () => void;
}

const RoundedButton: React.FC<IRoundedButton> = ({
  style,
  onClick,
  children,
}) => {
  return (
    <Button style={style} onClick={onClick}>
      {children}
    </Button>
  );
};

export default RoundedButton;
