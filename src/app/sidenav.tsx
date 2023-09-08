import styled from "styled-components";

import { Link, LinkProps, useMatch } from "react-router-dom";

type NavLinkProps = {
  $active: boolean;
};

type LinkComponentProps = LinkProps & {
  $end?: boolean;
};

const Container = styled.div`
  flex: 0 0 auto;
  border-right: 2px solid ${(p) => p.theme.colors.black60};
  padding: 1rem 2rem;
  flex-flow: column;
  overflow: auto;
  display: flex;
  width: 20rem;
`;

const Links = styled.div`
  flex: 0 0 auto;
  margin: 0 -1rem;
  flex-flow: column;
  display: flex;
  gap: 0.2rem;
`;

const NavLink = styled(Link)<NavLinkProps>`
  flex: 0 0 auto;
  transition: all 0.15s ease-in-out;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  ${(p) =>
    p.$active
      ? {
          backgroundColor: p.theme.colors.primary,
          fontWeight: 700,
        }
      : {
          backgroundColor: p.theme.colors.primary0,
          "&:hover": {
            backgroundColor: p.theme.colors.primary50,
          },
        }}
`;

const LinkComponent = ({ $end, to, ...props }: LinkComponentProps) => {
  const active = !!useMatch({ path: to.toString(), end: !!$end });

  return <NavLink to={to} $active={active} {...props} />;
};

const Sidenav = () => (
  <Container>
    <Links>
      <LinkComponent to="/" $end>
        Home page
      </LinkComponent>

      <LinkComponent to="/docker">Docker</LinkComponent>

      <LinkComponent to="/projects">Projects</LinkComponent>
    </Links>
  </Container>
);

export default Sidenav;
