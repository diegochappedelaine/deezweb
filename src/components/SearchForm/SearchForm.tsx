import SelectInput from "./SelectInput";
import TextInput from "./TextInput";

const SearchForm: React.FC<{ onSubmit: (e: React.FormEvent) => void }> = ({
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput />
      <SelectInput />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
