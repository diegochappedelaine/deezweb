import styled from "styled-components";

import { formatTime } from "utils";
import { useHistory } from "react-router-dom";
import { DeezerButton } from "components/Buttons";
import { TrackListContainer, Track } from "./styled";

import { ITrack } from "index.d";

const Wrapper = styled.section<{ backgroundColor: string }>`
  background: ${({ backgroundColor }) => backgroundColor};
  padding: 24px;
  border-radius: 16px;
  width: 500px;
  max-height: 375px;
  overflow: scroll;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

interface ITrackList {
  tracklist: ITrack[];
  backgroundColor: string;
  link: string;
}

const TrackList: React.FC<ITrackList> = ({
  tracklist,
  backgroundColor,
  link,
}) => {
  const history = useHistory();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Wrapper backgroundColor={backgroundColor}>
        <TrackListContainer>
          {tracklist.map(({ duration, title, id }, index) => (
            <Track key={index} onClick={() => history.push(`/track/${id}`)}>
              <span>{index + 1}.</span>
              <span>{title}</span>
              <div>
                <span>{formatTime(duration)}</span>
              </div>
            </Track>
          ))}
        </TrackListContainer>
      </Wrapper>
      <DeezerButton link={link} />
    </div>
  );
};

export default TrackList;
