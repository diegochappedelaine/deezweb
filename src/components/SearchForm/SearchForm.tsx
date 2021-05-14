import styled from "styled-components";

import SelectInput from "./SelectInput";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

const FormContainer = styled.form`
  display: flex;

  input,
  select {
    margin-right: 16px;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    input,
    select {
      margin: 0 0 32px;
    }
  }
`;

const SearchForm: React.FC<{ onSubmit: (e: React.FormEvent) => void }> = ({
  onSubmit,
}) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      <TextInput />
      <SelectInput />
      <SubmitButton>Search</SubmitButton>
    </FormContainer>
  );
};

export default SearchForm;
