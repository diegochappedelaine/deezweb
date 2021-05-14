import styled from "styled-components";

const Button = styled.button`
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  border-radius: 16px;
  padding: 0 24px;
  height: 44px;
  cursor: pointer;
  background-color: white;
  border: none;
  font-size: 16px;
  outline: none;

  &:active {
    background-color: #d5d5d0;
    transform: scale(0.98);
  }

  &:hover {
    background-color: #edede6;
  }
  transition: transform 100ms cubic-bezier(0.64, 0.04, 0.35, 1);
`;

const SubmitButton = ({ children }) => {
  return <Button type="submit">{children}</Button>;
};

export default SubmitButton;
