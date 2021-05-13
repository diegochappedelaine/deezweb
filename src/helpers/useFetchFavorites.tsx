import { useState, useEffect } from "react";
import store from "store2";

import { ITrack, IFavoritesTracks } from "index.d";

const corsProxyUrl = "https://mycorsproxyapp.herokuapp.com/";

function useFetch() {
  const favorites = store("favoritesItems");

  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IFavoritesTracks[]>();

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      try {
        const detailsData: ITrack[] = favorites.map(async (id: string) => {
          const preFetchData = await fetch(
            corsProxyUrl + `https://api.deezer.com/track/${id}`
          );
          return preFetchData.json();
        });
        const payload = (await Promise.all(detailsData)).map(
          (track: ITrack) => ({
            title: track.title,
            artistName: track.artist.name,
            link: track.link,
            cover: track.album.cover_xl,
            trackId: track.id,
            artistId: track.artist.id,
            albumId: track.album.id,
            albumName: track.album.title,
          })
        );
        setData(payload);
      } catch (error) {
        setError(error);
      }
      return setLoading(false);
    };

    fetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { error, loading, data };
}

export default useFetch;
