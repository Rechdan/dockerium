import { LinkProps, useMatch } from "react-router-dom";

import { Container } from "_/components/container";
import { Navbar, NavbarContent, NavbarLink, NavbarLinks } from "_/components/navbar";

type NavLinkComponentProps = LinkProps & {
  $matchEnd?: boolean;
};

const NavLinkComponent = ({ $matchEnd, to, ...props }: NavLinkComponentProps) => {
  const active = !!useMatch({ path: to.toString(), end: $matchEnd });

  return <NavbarLink to={to} $active={active} {...props} />;
};

const Subnav = () => (
  <Navbar>
    <Container>
      <NavbarContent>
        <NavbarLinks>
          <NavLinkComponent to="/" $matchEnd>
            Dashboard
          </NavLinkComponent>

          <NavLinkComponent to="/docker">Docker</NavLinkComponent>

          <NavLinkComponent to="/projects">Projects</NavLinkComponent>
        </NavbarLinks>
      </NavbarContent>
    </Container>
  </Navbar>
);

export default Subnav;
