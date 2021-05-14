import { useParams } from "react-router-dom";
import useFetch from "helpers/useFetch";

import { ITrack } from "index.d";

import TrackPage from "./TrackPage";

const TrackPageLayout: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: track, loading: trackLoading } = useFetch<ITrack>(
    `https://api.deezer.com/track/${id}`
  );

  if (trackLoading || !track) return null;

  return <TrackPage track={track} id={id} />;
};

export default TrackPageLayout;
