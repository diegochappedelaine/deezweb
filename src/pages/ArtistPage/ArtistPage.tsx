import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import useFetch from "helpers/useFetch";
import { usePalette } from "react-palette";

import NavBar from "components/NavBar";
import AlbumCover from "components/AlbumCover";
import { DeezerButton } from "components/Buttons";
import Footer from "components/Footer";
import {
  Container,
  Title,
  DiscographyContainer,
  AlbumContainer,
} from "./styled";

import { IArtist, IAlbum } from "index.d";

const Layout = styled.div<{ backgroundColor: string }>`
  width: 100vw;
  min-height: 100vh;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const ArtistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const { data: artist, loading: artistLoading } = useFetch<IArtist>(
    `https://api.deezer.com/artist/${id}`
  );

  const { data: albumsData, loading: albumsLoading } = useFetch<{
    data: IAlbum[];
  }>(`https://api.deezer.com/artist/${id}/albums`);

  const artistPicture = artist?.picture_big;

  const {
    data: colorData,
    loading,
    error,
  } = usePalette(artistPicture || "#FFFFFF");

  if (loading || !artist || albumsLoading || artistLoading || !albumsData)
    return null;

  const { data: albums } = albumsData;

  const artistId = artist.id,
    artistName = artist.name,
    numberOfAlbum = artist.nb_album,
    fans = artist.nb_fan,
    link = artist.link;

  const backgroundColor = error ? "#181201" : colorData.lightMuted,
    albumWrapperColor = error ? "lightgrey" : colorData.lightVibrant;

  const SquareDisplayData = [
    { label: "Artist", data: artistName },
    { label: "Albums", data: numberOfAlbum },
    { label: "Fans", data: fans },
  ];

  console.log(albums);

  return (
    <Layout backgroundColor={backgroundColor!}>
      <Container>
        <NavBar />
        <Title>{artistName}</Title>
        <DiscographyContainer>
          {albums &&
            albums.map(({ title, cover_big, id: albumId }, index) => (
              <AlbumContainer
                key={index}
                onClick={() => history.push(`/album/${albumId}`)}
              >
                <h2>
                  {artistName} - {title}
                </h2>
                <AlbumCover
                  albumWrapperColor={albumWrapperColor}
                  albumCover={cover_big}
                  albumTitle={title}
                />
              </AlbumContainer>
            ))}
        </DiscographyContainer>
        <DeezerButton style={{ margin: "0 auto 300px" }} link={link} />
      </Container>
      <Footer
        SquareDisplayData={SquareDisplayData}
        artist={{ artistPicture, artistId, artistName }}
        style={{ position: "fixed" }}
      />
    </Layout>
  );
};

export default ArtistPage;
