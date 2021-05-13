import { useState } from "react";
import styled from "styled-components";

import SquareDisplay from "./SquareDisplay";

import { useParams, useHistory } from "react-router-dom";
import useInnerWidth from "utils/useInnerWidth";
import { handleFavorites, isFavorite } from "helpers/handleFavorites";

import Favorite from "assets/svg/Favorite";

const InformationsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const FavoriteButton = styled.div`
  width: 260px;
  height: 260px;
  background: pink;
  flex-shrink: 0;
  background: #b26362;
  display: grid;
  place-items: center;
  transition: background-color ease-out 0.2s;

  img {
    width: 30%;
  }

  &:hover {
    background: #c18281;
    cursor: pointer;
  }
`;

const ArtistPicture = styled.img`
  height: 260px;
  transition: all ease-out 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;

interface IFooter {
  SquareDisplayData: any[];
  artist;
  style?: React.CSSProperties;
  hasFavorite: boolean;
}

const Footer: React.FC<IFooter> = ({
  SquareDisplayData,
  artist,
  style,
  hasFavorite,
}) => {
  const { id } = useParams<{ id: string }>();

  const innerWidth = useInnerWidth();
  const [favorite, setFavorite] = useState(isFavorite(id));
  const history = useHistory();

  const { artistPicture, artistId, artistName } = artist;

  return innerWidth > 900 ? (
    <InformationsWrapper style={style}>
      {innerWidth > 1200
        ? SquareDisplayData.map(({ label, data }, index) => (
            <SquareDisplay key={index} label={label} data={data} />
          ))
        : SquareDisplayData.filter((_, index) => index !== 0 && _).map(
            ({ label, data }, index) => (
              <SquareDisplay key={index} label={label} data={data} />
            )
          )}
      {hasFavorite && (
        <FavoriteButton
          onClick={() => {
            handleFavorites(id);
            setFavorite(!favorite);
          }}
        >
          <Favorite
            style={{ width: "30%", height: "30%" }}
            isFavorite={favorite}
          />
        </FavoriteButton>
      )}
      <ArtistPicture
        src={artistPicture}
        alt={artistName}
        onClick={() => history.push(`/artist/${artistId}`)}
      />
    </InformationsWrapper>
  ) : null;
};

export default Footer;
