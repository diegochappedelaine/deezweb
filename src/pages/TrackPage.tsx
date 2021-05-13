import { useParams } from "react-router-dom";

import useFetch from "helpers/useFetch";

import { ITrack } from "index.d";

const TrackPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: track, loading } = useFetch<ITrack>(
    `https://api.deezer.com/track/${id}`
  );

  if (loading || !track) return null;

  return <div>{track.title}</div>;
};

export default TrackPage;
