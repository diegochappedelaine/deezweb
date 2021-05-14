import styled from "styled-components";

const Label = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  padding: 24px;
  text-align: center;

  @media (max-width: 600px) {
    height: 250px;
  }
`;

const Cover = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  transition: all ease-out 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(70%);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.1s ease-out;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export { Label, Cover, Link };
