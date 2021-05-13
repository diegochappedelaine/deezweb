import React from "react";
import styled from "styled-components";

const AlbumWrapper = styled.div<{ backgroundColor: string | undefined }>`
  height: 440px;
  width: 440px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: ${({ backgroundColor }) => backgroundColor};

  @media (max-width: 1200px) {
    height: 340px;
    width: 340px;

    img {
      height: 300px;
    }
  }

  @media (max-width: 900px) {
    height: 240px;
    width: 240px;
    margin: 0 auto 24px;

    img {
      height: 200px;
    }
  }
`;

const AlbumCoverImage = styled.img`
  height: 400px;
  border-radius: 16px;
`;

interface IAlbumCover {
  albumWrapperColor: string | undefined;
  albumCover: string;
  albumTitle: string;
}

const AlbumCover: React.FC<IAlbumCover> = ({
  albumWrapperColor,
  albumCover,
  albumTitle,
}) => {
  return (
    <AlbumWrapper backgroundColor={albumWrapperColor}>
      <AlbumCoverImage src={albumCover} alt={albumTitle} />
    </AlbumWrapper>
  );
};

export default AlbumCover;
