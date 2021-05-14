import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const MainWrapper = styled.div`
  display: flex;
  padding: 0 24px;
  width: 100%;
  margin-top: 24px;
  justify-content: space-around;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export { Container, MainWrapper };
