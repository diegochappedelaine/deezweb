import styled from "styled-components";
import { Element } from "react-scroll";

const AlbumsDisplay = styled.section`
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const CoversSection: React.FC = ({ children }) => {
  return (
    <Element name="coverSection">
      <AlbumsDisplay>{children}</AlbumsDisplay>
    </Element>
  );
};

export default CoversSection;
