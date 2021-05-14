import React from "react";

interface ArrowNoTailProps {
  size: string;
  fill: string;
  stroke: string;
  style?: React.CSSProperties;
}
const ArrowNoTail: React.FC<ArrowNoTailProps> = ({
  size,
  fill,
  stroke,
  style,
}) => {
  return (
    <svg
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      version="1.1"
    >
      <title>095CEA16-DA7B-4DF4-BB6B-305E70A14405</title>
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        fillOpacity="0"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g id="icons/arrow/down" fill={fill} stroke={stroke} strokeWidth="2.5">
          <polyline
            id="Path"
            points="7.99999998 9.99999999 12 14 16 9.99999999"
          ></polyline>
        </g>
      </g>
    </svg>
  );
};

export default ArrowNoTail;
