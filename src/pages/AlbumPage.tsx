import { useParams } from "react-router-dom";

import useFetch from "helpers/useFetch";

import { IAlbum } from "index.d";

const AlbumPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: album, loading } = useFetch<IAlbum>(
    `https://api.deezer.com/album/${id}`
  );

  if (loading || !album) return null;

  return <div>{album.title}</div>;
};

export default AlbumPage;
