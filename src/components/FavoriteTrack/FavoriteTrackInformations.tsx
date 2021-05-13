import styled from "styled-components";

import { IFavoritesTracks } from "index.d";

import { useHistory } from "react-router-dom";
import useInnerWidth from "utils/useInnerWidth";

const InformationsWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  span {
    &:first-child {
      font-weight: 100;
    }

    &:last-child:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  h1,
  p,
  h3 {
    font-size: 2.4rem;
    margin-bottom: 1.2rem;
    width: fit-content;
  }

  h1 {
    font-weight: 500;
  }

  p {
    font-weight: 300;
    color: #f7f7f7;
  }

  @media (max-width: 900px) {
    h1,
    p,
    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 600px) {
    h1,
    p,
    h3 {
      font-size: 1.4rem;
    }
  }
`;

const FavoriteTrackInformations: React.FC<{ track: IFavoritesTracks }> = ({
  track: { albumId, albumName, artistId, artistName, trackId, title },
}) => {
  const history = useHistory();
  const innerWidth = useInnerWidth();

  return (
    <InformationsWrapper>
      {innerWidth > 600 && (
        <h1>
          <span>Album: </span>
          <span onClick={() => history.push(`/album/${albumId}`)}>
            {albumName}
          </span>
        </h1>
      )}
      <p>
        <span>Arstist: </span>
        <span onClick={() => history.push(`/artist/${artistId}`)}>
          {artistName}
        </span>
      </p>

      <h3>
        <span>Title: </span>
        <span onClick={() => history.push(`/track/${trackId}`)}>{title}</span>
      </h3>
    </InformationsWrapper>
  );
};

export default FavoriteTrackInformations;
