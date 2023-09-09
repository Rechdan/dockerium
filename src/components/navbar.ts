import styled from "styled-components";

import { Link } from "react-router-dom";

export const Navbar = styled.div`
  flex: 0 0 auto;
  border-bottom: 1px solid ${(p) => p.theme.colors.white10};
  background-color: ${(p) => p.theme.colors.white05};
  flex-flow: column;
  display: flex;
`;

export const NavbarContent = styled.div`
  flex: 1 1 auto;
  flex-flow: row;
  display: flex;
  gap: 2rem;
`;

export const NavbarTitle = styled.div`
  flex: 0 0 auto;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 0;
`;

export const NavbarLinks = styled.div`
  flex: 0 0 auto;
  padding: 1rem 0;
  flex-flow: row;
  display: flex;
  gap: 1rem;
`;

type NavbarLinkProps = {
  $active: boolean;
};

export const NavbarLink = styled(Link)<NavbarLinkProps>`
  flex: 0 0 auto;
  transition: all 0.15s ease-in-out;
  border-radius: 0.25rem;
  font-weight: 700;
  padding: 0.25rem;
  margin: -0.25rem;

  ${(p) =>
    p.$active
      ? {
          backgroundColor: p.theme.colors.white,
          color: p.theme.colors.primary,
        }
      : {
          backgroundColor: p.theme.colors.white0,
          color: p.theme.colors.primaryLight,
        }};
`;
