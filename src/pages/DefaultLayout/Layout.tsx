import styled from "styled-components";
import { useAppContext } from "provider/AppProvider";

const LayoutContainer = styled.main<{ backgroundColor: string }>`
  background: ${({ backgroundColor }) => backgroundColor};
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  transition: background-color 0.8s ease;
`;

const Layout = ({ children }) => {
  const { loadingBackgroundColor } = useAppContext();

  return (
    <LayoutContainer backgroundColor={loadingBackgroundColor!}>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
