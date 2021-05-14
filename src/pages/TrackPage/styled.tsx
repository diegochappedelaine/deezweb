import styled from "styled-components";

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const InformationsWrapper = styled.article`
  color: white;
  width: 50%;
  display: flex;
  flex-direction: column;

  .nolink {
    text-decoration: none !important;
    cursor: default !important;
  }

  span {
    &:first-child {
      font-weight: 100;
      cursor: default;
    }

    &:last-child:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  h1,
  p,
  h3 {
    font-size: 3rem;
    margin-bottom: 1.2rem;
    width: fit-content;
  }

  h1 {
    font-weight: 500;
  }

  p {
    font-weight: 300;
    color: #f7f7f7;
  }

  h3 {
    margin-bottom: 60px;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
    text-align: center;
    white-space: normal;

    h1,
    p,
    h3 {
      width: 100%;
    }

    h3 {
      margin-bottom: 1.5rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 16px;

  @media (max-width: 900px) {
    button {
      height: 64px;
      width: fit-content;
      margin: 0;
      font-size: 1.4rem;

      &:first-child {
        margin-right: 24px;
      }
    }
  }
`;

export { Container, Wrapper, InformationsWrapper, ButtonContainer };
