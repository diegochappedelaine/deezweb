import styled from "styled-components";

const InformationsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const FavoriteButton = styled.div`
  width: 260px;
  height: 260px;
  background: pink;
  flex-shrink: 0;
  background: #b26362;
  display: grid;
  place-items: center;
  transition: background-color ease-out 0.2s;

  img {
    width: 30%;
  }

  &:hover {
    background: #c18281;
    cursor: pointer;
  }
`;

const ArtistPicture = styled.img`
  height: 260px;
  transition: all ease-out 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;

export { InformationsWrapper, FavoriteButton, ArtistPicture };
