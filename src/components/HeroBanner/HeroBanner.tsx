import styled from "styled-components";

import SearchForm from "components/SearchForm/SearchForm";

const HeroBannerContainer = styled.header`
  min-height: calc(100vh - 62px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;

  a {
    color: white;
    text-decoration: none;
    &:hover,
    &:active,
    &:focus {
      color: white !important;
    }
  }

  h1 {
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 2rem;

    cursor: pointer;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.3);

    &:hover {
      text-shadow: 3px 3px rgba(0, 0, 0, 0.8);
    }
  }

  h2 {
    margin-bottom: 3rem;
    font-size: 2rem;
    cursor: default;
    font-weight: 300;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.3);
  }
`;

const HeroBanner: React.FC<{ handleSubmit: (e: React.FormEvent) => void }> = ({
  handleSubmit,
}) => {
  return (
    <HeroBannerContainer>
      <a href="/">
        <h1>Deezweb</h1>
      </a>
      <h2>Browse through Deezer's API</h2>
      <SearchForm onSubmit={handleSubmit} />
    </HeroBannerContainer>
  );
};

export default HeroBanner;
