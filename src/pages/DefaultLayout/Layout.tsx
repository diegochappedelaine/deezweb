import styled from "styled-components";
import { useAppContext } from "provider/AppProvider";

import NavBar from "components/NavBar";

const LayoutContainer = styled.main<{ backgroundColor: string }>`
  background: ${({ backgroundColor }) => backgroundColor};
  min-height: 100vh;
  overflow: hidden;
  height: 100%;
  width: 100vw;
  transition: background-color 0.8s ease;
  nav {
    max-width: 1440px;
    margin: 0 auto;
    padding: 16px 48px;
  }
`;

const Layout = ({ children }) => {
  const { loadingBackgroundColor } = useAppContext();

  return (
    <LayoutContainer backgroundColor={loadingBackgroundColor!}>
      <NavBar />

      {children}
    </LayoutContainer>
  );
};

export default Layout;
