import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { formatTime } from "utils";
import { usePalette } from "react-palette";

import { Label, Cover, Link } from "./styled";

import { ITrack } from "index.d";

const Thumbnail = styled.div<{
  backgroundColor: string;
  flexDirection: "row" | "row-reverse";
}>`
  display: flex;
  position: relative;
  ${({ backgroundColor, flexDirection }) => `
  flex-direction: ${flexDirection};
  background: ${backgroundColor};
  `}

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

interface IAlbumThumbnail {
  track: ITrack;
  isCoverReversed: boolean;
}

const AlbumThumbnail: React.FC<IAlbumThumbnail> = ({
  track,
  isCoverReversed,
}) => {
  const history = useHistory();

  const trackName = track.title_short,
    trackId = track.id,
    artist = track.artist.name,
    artistId = track.artist.id,
    coverUrl = track.album.cover_xl,
    duration = track.duration,
    albumId = track.album.id,
    albumName = track.album.title;

  const { data, loading, error } = usePalette(track.album.cover_xl);

  if (loading || !data) return null;

  const backgroundColor = error ? "#181201" : data.lightMuted,
    color = error ? "white" : data.vibrant;

  return (
    <Thumbnail
      flexDirection={isCoverReversed ? "row" : "row-reverse"}
      backgroundColor={backgroundColor!}
    >
      {/* <RoundedButton /> */}
      <Cover
        src={coverUrl}
        alt={albumName}
        onClick={() => history.push(`/album/${albumId}`)}
      />
      <Label color={color}>
        <h2 style={{ marginBottom: 8 }}>
          <Link onClick={() => history.push(`/track/${trackId}`)}>
            {trackName}
          </Link>
          {" - "}
          <Link onClick={() => history.push(`/artist/${artistId}`)}>
            {artist}
          </Link>
        </h2>
        <p style={{ marginBottom: 8 }}>{formatTime(duration)}</p>
        <h3 style={{ marginBottom: 8 }}>
          <Link onClick={() => history.push(`/album/${albumId}`)}>
            {albumName}
          </Link>
        </h3>
      </Label>
    </Thumbnail>
  );
};

export default AlbumThumbnail;
