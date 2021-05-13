import { useState } from "react";

export const sortOptions = [
  { value: "RATING_ASC", label: "by popularity" },
  { value: "ALBUM_ASC", label: "by Album" },
  { value: "ARTIST_ASC", label: "by Artist" },
  { value: "TRACK_ASC", label: "by title" },
  { value: "RANKING", label: "by rank" },
];

const SelectInput = () => {
  const [selectedValue, setSelectedValue] = useState(sortOptions[0].value);

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLSelectElement;
    setSelectedValue(target.value);
  };
  return (
    <select name="sort" value={selectedValue} onChange={handleChange}>
      {sortOptions.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
