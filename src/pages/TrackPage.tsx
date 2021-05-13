import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import useFetch from "helpers/useFetch";
import { formatTime, useInnerWidth } from "utils";
import { usePalette } from "react-palette";
import { isFavorite, handleFavorites } from "helpers/handleFavorites";

import AlbumCover from "components/AlbumCover";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { DeezerButton, RemoveFavoriteButton } from "components/Buttons";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

import { ITrack } from "index.d";

const Layout = styled.div<{ backgroundColor: string }>`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const InformationsWrapper = styled.article`
  color: white;
  width: 50%;
  display: flex;
  flex-direction: column;

  span {
    &:first-child {
      font-weight: 100;
    }

    &:last-child:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  h1,
  p,
  h3 {
    font-size: 3rem;
    margin-bottom: 1.2rem;
    width: fit-content;
  }

  h1 {
    font-weight: 500;
  }

  p {
    font-weight: 300;
    color: #f7f7f7;
  }

  h3 {
    margin-bottom: 60px;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
    text-align: center;
    white-space: normal;

    h1,
    p,
    h3 {
      width: 100%;
    }

    h3 {
      margin-bottom: 1.5rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 16px;

  @media (max-width: 900px) {
    button {
      height: 64px;
      width: fit-content;
      margin: 0;
      font-size: 1.4rem;

      &:first-child {
        margin-right: 24px;
      }
    }
  }
`;

const TrackPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const innerWidth = useInnerWidth();
  const [trackIsFavorite, setTrackIsFavorite] = useState(isFavorite(id));

  const { data: track } = useFetch<ITrack>(
    `https://api.deezer.com/track/${id}`
  );

  const albumCover = track?.album.cover_big;

  const {
    data: colorData,
    loading,
    error,
  } = usePalette(albumCover || "#ffffff");

  if (!track) return null;

  const duration = formatTime(track.duration),
    releaseDate = new Date(track.release_date).toLocaleDateString(),
    bpm = track.bpm,
    artistPicture = track.artist.picture_big,
    artistId = track.artist.id,
    artistName = track.artist.name,
    albumTitle = track.album.title,
    albumId = track.album.id,
    trackTitle = track.title,
    previewListenUrl = track.preview,
    link = track.link;

  const backgroundColor = error ? "#181201" : colorData.lightMuted,
    albumWrapperColor = error ? "lightgrey" : colorData.lightVibrant;

  const SquareDisplayData = [
    { label: "BPM", data: bpm ? bpm : "/" },
    { label: "Duration", data: duration },
    { label: "Release date", data: releaseDate },
  ];

  return (
    <Layout backgroundColor={backgroundColor!}>
      <Container>
        <NavBar style={{ marginBottom: 64 }} />
        <Wrapper>
          <AlbumCover
            albumWrapperColor={albumWrapperColor}
            albumCover={albumCover!}
            albumTitle={albumTitle}
          />
          <InformationsWrapper>
            <h1>
              <span>Album: </span>
              <span onClick={() => history.push(`/album/${albumId}`)}>
                {albumTitle}
              </span>
            </h1>
            <p>
              <span>Arstist: </span>
              <span onClick={() => history.push(`/artist/${artistId}`)}>
                {artistName}
              </span>
            </p>

            <h3>
              <span>Title: </span>
              <span>{trackTitle}</span>
            </h3>
            <AudioPlayer src={previewListenUrl} showSkipControls={false} />
            <ButtonContainer>
              {innerWidth <= 900 && (
                <RemoveFavoriteButton
                  onClick={() => {
                    handleFavorites(id);
                    setTrackIsFavorite(!trackIsFavorite);
                  }}
                >
                  {trackIsFavorite ? "Remove favorite" : "Add favorite"}
                </RemoveFavoriteButton>
              )}
              <DeezerButton link={link} />
            </ButtonContainer>
          </InformationsWrapper>
        </Wrapper>
      </Container>

      <Footer
        SquareDisplayData={SquareDisplayData}
        artist={{ artistPicture, artistId, artistName }}
        hasFavorite
      />
    </Layout>
  );
};

export default TrackPage;
