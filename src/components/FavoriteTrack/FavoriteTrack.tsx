import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { IFavoritesTracks } from "index.d";

import { useHistory } from "react-router-dom";
import useInnerWidth from "utils/useInnerWidth";
import { usePalette } from "react-palette";

import { DeezerButton, RemoveFavoriteButton } from "components/Buttons";
import FavoriteTrackInformations from "./FavoriteTrackInformations";

import { Delete, DeezerLogo } from "assets/svg";

import WaitLoader from "assets/Ellipsis-1s-200px.gif";

const Container = styled.li<{ backgroundColor: string }>`
  list-style-type: none;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 16px;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 60%);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

const AlbumWrapper = styled.div<{ backgroundColor: string }>`
  height: 240px;
  max-width: 240px;
  width: 100%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ backgroundColor }) => backgroundColor};
  margin-right: 48px;

  @media (max-width: 900px) {
    height: 160px;
    max-width: 160px;
    width: 100%;
    margin-right: 24px;

    img {
      height: 140px;
    }
  }

  @media (max-width: 600px) {
    height: 130px;
    max-width: 130px;
    width: 100%;
    margin-right: 16px;

    img {
      height: 110px;
    }
  }
`;

const AlbumCoverImage = styled.img`
  height: 200px;
  border-radius: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 16px;

  @media (max-width: 600px) {
    align-items: flex-end;
  }

  button {
    margin: 0 !important;

    &:first-child {
      margin-bottom: 16px !important;
    }

    @media (max-width: 600px) {
      font-size: 1rem !important;
      width: fit-content !important;
    }
  }
`;

const Placeholder = styled.div`
  list-style-type: none;
  background: lightgrey;
  border-radius: 16px;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 60%);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

interface IFavoriteTracks {
  onRemove: () => void;
  track: IFavoritesTracks;
}

const FavoriteTrack: React.FC<IFavoriteTracks> = ({
  onRemove,
  track: {
    title,
    artistName,
    link,
    cover,
    trackId,
    artistId,
    albumId,
    albumName,
  },
}) => {
  const history = useHistory();
  const innerWidth = useInnerWidth();
  const { data: colorData, loading, error } = usePalette(cover);
  const [differedLoading, setDifferedLoading] = useState(true);

  const backgroundColor = error ? "#181201" : colorData.lightMuted,
    albumWrapperColor = error ? "lightgrey" : colorData.lightVibrant;

  useEffect(() => {
    if (!loading) {
      const loadingDelayedAppearance = setTimeout(() => {
        setDifferedLoading(false);
      }, 300);
      return () => clearTimeout(loadingDelayedAppearance);
    }
  }, [loading]);

  if (differedLoading)
    return (
      <Placeholder>
        <AlbumWrapper backgroundColor={"lightgrey"}>
          <AlbumCoverImage src={WaitLoader} alt="loading" />
        </AlbumWrapper>
      </Placeholder>
    );

  return (
    <Container backgroundColor={backgroundColor!}>
      <AlbumWrapper
        backgroundColor={albumWrapperColor!}
        onClick={() => history.push(`/album/${albumId}`)}
      >
        <AlbumCoverImage src={cover} alt={title} />
      </AlbumWrapper>
      <FavoriteTrackInformations
        track={{
          title,
          artistName,
          link,
          cover,
          trackId,
          artistId,
          albumId,
          albumName,
        }}
      />
      <ButtonWrapper>
        <DeezerButton style={{ fontSize: "1.4rem", width: 105 }} link={link}>
          {innerWidth > 600 ? (
            "Deezer"
          ) : (
            <img
              src={DeezerLogo}
              alt="deezer"
              style={{ width: 24, marginTop: 2 }}
            />
          )}
        </DeezerButton>
        <RemoveFavoriteButton onClick={onRemove}>
          {innerWidth > 600 ? (
            "Remove"
          ) : (
            <img
              src={Delete}
              alt="delete"
              style={{ width: 14, marginTop: 4 }}
            />
          )}
        </RemoveFavoriteButton>
      </ButtonWrapper>
    </Container>
  );
};

export default FavoriteTrack;
