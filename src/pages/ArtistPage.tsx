import { useParams } from "react-router-dom";

import useFetch from "helpers/useFetch";

import { IArtist } from "index.d";

const ArtistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: artist, loading } = useFetch<IArtist>(
    `https://api.deezer.com/artist/${id}`
  );

  if (loading || !artist) return null;

  return <div>{artist.name}</div>;
};

export default ArtistPage;
