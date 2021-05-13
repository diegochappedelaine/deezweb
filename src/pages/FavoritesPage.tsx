import { useEffect, useState } from "react";
import styled from "styled-components";

import { IFavoritesTracks } from "index.d";

import useFetchFavorites from "helpers/useFetchFavorites";
import { handleFavorites } from "helpers/handleFavorites";

import NavBar from "components/NavBar";
import FavoriteTrack from "components/FavoriteTrack";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #2e6b71;
`;

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InformationsWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;

  h1 {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<null | IFavoritesTracks[]>(null);
  const { data, loading } = useFetchFavorites();

  useEffect(() => {
    if (data) {
      setFavorites(data);
    }
  }, [data]);

  if (loading || !favorites) return null;

  return (
    <Layout>
      <Container>
        <NavBar />
        <ul>
          {favorites.map((track, index) => (
            <FavoriteTrack
              track={track}
              key={index}
              onRemove={() => {
                const copy = [...favorites];
                copy.splice(index, 1);
                handleFavorites(track.trackId.toString());
                setFavorites(copy);
              }}
            />
          ))}
        </ul>
        {favorites.length === 0 && (
          <InformationsWrapper>
            <h1>Looks like you have not set any favorites yet</h1>
            <a href="/">
              <p>Start adding some now !</p>
            </a>
          </InformationsWrapper>
        )}
      </Container>
    </Layout>
  );
};

export default FavoritesPage;
