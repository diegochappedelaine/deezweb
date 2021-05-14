import { useState } from "react";

import SquareDisplay from "./SquareDisplay";

import { useParams, useHistory } from "react-router-dom";
import useInnerWidth from "utils/useInnerWidth";
import { handleFavorites, isFavorite } from "helpers/handleFavorites";

import Favorite from "assets/svg/Favorite";

import { InformationsWrapper, FavoriteButton, ArtistPicture } from "./styled";

interface IFooter {
  SquareDisplayData: any[];
  artist: { artistPicture: string; artistId: number; artistName: string };
  style?: React.CSSProperties;
  hasFavorite?: boolean;
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
