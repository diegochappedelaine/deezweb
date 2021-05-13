import styled from "styled-components";

const TrackListContainer = styled.ol``;

const Track = styled.li`
  color: white;
  font-weight: 400;
  font-size: 2rem;
  display: flex;
  padding: 8px;
  border-radius: 4px;
  transition: background-color ease-out 0.2s;

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }

  span {
    &:first-child {
      margin-right: 8px;
    }
  }

  div {
    margin-left: auto;
    width: 50px;
  }

  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

export { TrackListContainer, Track };
