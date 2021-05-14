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

const Title = styled.h1`
  font-size: 6rem;
  margin: 32px auto 64px;
  font-weight: 500;
  color: #fff;
  transition: 0.2s all ease;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.3);
  cursor: default;
`;

const DiscographyContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const AlbumContainer = styled.article`
  width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  transition: all ease-out 0.2s;

  @media (max-width: 1200px) {
    width: 340px;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 16px;
    color: #fff;
    transition: 0.2s all ease;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.3);

    &:hover {
      cursor: pointer;
      text-shadow: 3px 3px rgba(0, 0, 0, 0.8);
    }
  }

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;

export { Layout, Container, Title, DiscographyContainer, AlbumContainer };
