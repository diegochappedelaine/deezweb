import styled from "styled-components";

const Container = styled.div`
  background: white;
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;

const Label = styled.h3`
  font-weight: 500;
  font-size: 1.4rem;
  color: #514f4b;
  text-align: center;
  margin-bottom: 0.8rem;
`;

const DataLabel = styled.p`
  font-weight: 400;
  font-size: 4rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  color: black;

  @media (max-width: 1400px) {
    font-size: 2.4rem;
  }
`;

const SquareDisplay: React.FC<{ label: string; data: string }> = ({
  label,
  data,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <DataLabel>{data}</DataLabel>
    </Container>
  );
};

export default SquareDisplay;
