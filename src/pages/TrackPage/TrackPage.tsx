import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import { useAppContext } from "provider/AppProvider";
import useFetch from "helpers/useFetch";
import { formatTime, useInnerWidth } from "utils";
import { usePalette } from "react-palette";
import { isFavorite, handleFavorites } from "helpers/handleFavorites";

import AlbumCover from "components/AlbumCover";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { DeezerButton, RemoveFavoriteButton } from "components/Buttons";
import {
  Container,
  Wrapper,
  InformationsWrapper,
  ButtonContainer,
} from "./styled";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

import { ITrack } from "index.d";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

const TrackPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const innerWidth = useInnerWidth();
  const [trackIsFavorite, setTrackIsFavorite] = useState(isFavorite(id));
  const { setLoadingBackgroundColor, loadingBackgroundColor } = useAppContext();

  const { data: track } = useFetch<ITrack>(
    `https://api.deezer.com/track/${id}`
  );

  const albumCover = track?.album?.cover_big;

  const {
    data: colorData,
    loading,
    error,
  } = usePalette(albumCover || "#ffffff");

  const backgroundColor = error ? loadingBackgroundColor : colorData.lightMuted,
    albumWrapperColor = error ? "lightgrey" : colorData.lightVibrant;

  useEffect(() => {
    if (!loading) {
      if (backgroundColor) {
        setLoadingBackgroundColor!(backgroundColor!);
        console.log(backgroundColor);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  if (!track || loading) return null;

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

  const SquareDisplayData = [
    { label: "BPM", data: bpm ? bpm : "/" },
    { label: "Duration", data: duration },
    { label: "Release date", data: releaseDate },
  ];

  return (
    <Layout>
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
