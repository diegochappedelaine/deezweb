import styled from "styled-components";

import { useHistory } from "react-router-dom";

const H1 = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  color: white;
  transition: 0.2s all ease;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  &:hover {
    cursor: pointer;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.8);
  }
`;

const ALink = styled.a`
  color: white;
  font-size: 2rem;
  text-decoration: none;
  margin-left: 16px;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.3);
  transition: 0.2s all ease;

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }

  &:hover {
    cursor: pointer;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.8);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const NavItems = [
  { label: "search", href: "/" },
  { label: "favorites", href: "/favorites" },
];

const NavBar: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const history = useHistory();
  return (
    <Nav style={style}>
      <H1 onClick={() => history.push("/")}>deez . web</H1>
      <ul style={{ display: "flex", marginLeft: "auto" }}>
        {NavItems.map(({ label, href }, index) => (
          <li key={index}>
            <ALink href={href}>{label}</ALink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default NavBar;
