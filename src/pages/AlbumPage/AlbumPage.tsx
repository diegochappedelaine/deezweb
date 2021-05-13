import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { usePalette } from "react-palette";
import styled from "styled-components";

import { formatTime } from "utils";
import useFetch from "helpers/useFetch";
import { useAppContext } from "provider/AppProvider";

import TrackList from "components/TrackList/TrackList";
import NavBar from "components/NavBar";
import AlbumCover from "components/AlbumCover/AlbumCover";
import Footer from "components/Footer/Footer";

import { IAlbum } from "index.d";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 20%);
`;

const MainWrapper = styled.div`
  display: flex;
  padding: 0 24px;
  width: 100%;
  margin-top: 100px;
  justify-content: space-around;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Title = styled.h1<{ onClick?: any }>`
  color: white;
  font-size: 3rem;
  margin-bottom: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 500px;

  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
    white-space: normal;
  }

  &:hover {
    ${({ onClick }) => `
    cursor: ${onClick ? "pointer" : "inherit"};
    text-decoration: ${onClick ? "underline" : "none"};
    `}
  }
`;

const AlbumPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { setLoadingBackgroundColor, loadingBackgroundColor } = useAppContext();

  const { data: album } = useFetch<IAlbum>(
    `https://api.deezer.com/album/${id}`
  );

  const albumCover = album?.cover_big;

  const {
    data: colorData,
    loading,
    error,
  } = usePalette(albumCover || "#FFFFFF");

  useEffect(() => {
    if (!loading) {
      if (backgroundColor) {
        setLoadingBackgroundColor!(backgroundColor!);
        console.log(backgroundColor);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const backgroundColor = error ? loadingBackgroundColor : colorData.lightMuted,
    albumWrapperColor = error ? "lightgrey" : colorData.lightVibrant,
    trackListColor = error ? "darkgrey" : colorData.muted;

  if (loading || !album) return null;

  const albumTitle = album.title,
    genre = album.genres.data[0].name,
    artistName = album.artist.name,
    artistPicture = album.artist.picture_big,
    artistId = album.artist.id,
    tracklist = album.tracks.data,
    releaseDate = new Date(album.release_date).toLocaleDateString(),
    duration = formatTime(album.duration),
    link = album.link,
    numberOfTracks = album.nb_tracks;

  const SquareDisplayData = [
    { label: "Duration", data: duration },
    { label: "Tracks", data: numberOfTracks },
    { label: "Release date", data: releaseDate },
    { label: "Genre", data: genre },
  ];

  return (
    <Container>
      <MainWrapper>
        <NavBar
          style={{
            position: "absolute",
            top: 30,
            maxWidth: "80vw",
            width: "100%",
          }}
        />
        <div>
          <Title style={{ fontWeight: 500 }}>{albumTitle}</Title>
          <Title
            style={{ fontWeight: 300, color: "#f7f7f7" }}
            onClick={() => history.push(`/artist/${artistId}`)}
          >
            {artistName}
          </Title>
          <AlbumCover
            albumWrapperColor={albumWrapperColor}
            albumCover={albumCover!}
            albumTitle={albumTitle}
          />
        </div>

        <TrackList
          tracklist={tracklist}
          backgroundColor={trackListColor!}
          link={link}
        />
      </MainWrapper>
      <Footer
        SquareDisplayData={SquareDisplayData}
        artist={{ artistPicture, artistId, artistName }}
      />
    </Container>
  );
};

export default AlbumPage;
