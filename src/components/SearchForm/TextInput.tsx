import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 2px solid transparent;
  padding: 0 16px;
  font-size: 16px;
  background-color: #ffffff;
  border-radius: 16px;
  font-weight: medium;
  height: 40px;

  &:hover {
    box-shadow: 10px 10px 30px 0 rgba(189, 188, 166, 0.2);
    transition-duration: 100ms;
  }
  &::placeholder {
    color: #b2b2b0;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid black;
  }
`;

const TextInput: React.FC = () => {
  const [text, setText] = useState<string>("");

  const onChangeHandler = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setText(target.value);
  };

  return (
    <Input
      required
      type="text"
      name="search"
      value={text}
      onChange={onChangeHandler}
      placeholder="Search"
    />
  );
};

export default TextInput;
