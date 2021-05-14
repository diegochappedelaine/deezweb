import React from "react";

const FavoriteStar: React.FC<{ isFavorite: boolean }> = ({ isFavorite }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 53.867 53.867"
      style={{ width: 24 }}
    >
      <polygon
        style={{
          fill: isFavorite ? "#EFCE4A" : "lightgrey",
          transition: "all ease-in-out 0.2s",
        }}
        points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
	10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export default FavoriteStar;
