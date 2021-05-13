import { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState<string>("");

  const onChangeHandler = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setText(target.value);
  };

  return (
    <input
      required
      type="text"
      name="search"
      value={text}
      onChange={onChangeHandler}
    />
  );
};

export default TextInput;
