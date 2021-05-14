import { useEffect, useState } from "react";

import { IFavoritesTracks } from "index.d";

import useFetchFavorites from "helpers/useFetchFavorites";
import { handleFavorites } from "helpers/handleFavorites";

import FavoriteTrack from "components/FavoriteTrack";
import { Layout, Container, InformationsWrapper } from "./styled";

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
