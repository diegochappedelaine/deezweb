import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import useFetch from "helpers/useFetch";
import { usePalette } from "react-palette";
import { useAppContext } from "provider/AppProvider";

import FadeIn from "components/FadeIn";
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

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const ArtistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { setLoadingBackgroundColor, loadingBackgroundColor } = useAppContext();

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
    albumWrapperColor = error ? "lightgrey" : colorData.lightVibrant;

  if (loading || !artist || albumsLoading || artistLoading || !albumsData)
    return null;

  const { data: albums } = albumsData;

  const artistId = artist.id,
    artistName = artist.name,
    numberOfAlbum = artist.nb_album,
    fans = artist.nb_fan,
    link = artist.link;

  const SquareDisplayData = [
    { label: "Artist", data: artistName },
    { label: "Albums", data: numberOfAlbum },
    { label: "Fans", data: fans },
  ];

  return (
    <Layout>
      <Container>
        <FadeIn>
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
        </FadeIn>
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
