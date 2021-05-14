import { useState } from "react";

import styled from "styled-components";

export const sortOptions = [
  { value: "RATING_ASC", label: "by popularity" },
  { value: "ALBUM_ASC", label: "by Album" },
  { value: "ARTIST_ASC", label: "by Artist" },
  { value: "TRACK_ASC", label: "by title" },
  { value: "RANKING", label: "by rank" },
];

const SelectContainer = styled.select`
  border: 2px solid transparent;
  padding: 0 16px;
  font-size: 16px;
  background-color: #ffffff;
  border-radius: 16px;
  font-weight: medium;
  height: 44px;

  &:hover {
    box-shadow: 10px 10px 30px 0 rgba(189, 188, 166, 0.2);
    transition-duration: 100ms;
  }

  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid black;
  }
`;

const SelectInput: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState(sortOptions[0].value);

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLSelectElement;
    setSelectedValue(target.value);
  };
  return (
    <SelectContainer name="sort" value={selectedValue} onChange={handleChange}>
      {sortOptions.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </SelectContainer>
  );
};

export default SelectInput;
