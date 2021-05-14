import styled from "styled-components";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InformationsWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;

  h1 {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export { Layout, Container, InformationsWrapper };
