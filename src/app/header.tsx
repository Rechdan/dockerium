import { useMemo } from "react";

import styled from "styled-components";

import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

import { Link, useLocation } from "react-router-dom";

type Path = {
  label: string;
  pathMatch: RegExp;
  to: string;
};

const paths: Path[] = [
  { label: "Dashboard", pathMatch: /^\/$/, to: "/" },
  { label: "Docker", pathMatch: /^\/docker/, to: "/docker" },
  { label: "Users", pathMatch: /^\/users/, to: "/users" },
  { label: "Githubs", pathMatch: /^\/githubs/, to: "/githubs" },
  { label: "Projects", pathMatch: /^\/projects/, to: "/projects" },
];

const SBox = styled(Box)`
  border-bottom: 1px solid ${(p) => p.theme.palette.divider};
`;

const Logo = styled(Box)`
  padding: ${(p) => p.theme.spacing(2, 0)};
`;

const Header = () => {
  const pathname = useLocation().pathname;

  const valueIndex = useMemo(
    () =>
      Math.max(
        0,
        paths.findIndex((p) => p.pathMatch.test(pathname))
      ),
    [pathname]
  );

  return (
    <>
      <SBox>
        <Container>
          <Logo>
            <Typography variant="h5" component={Link} to="/">
              Dockerium
            </Typography>
          </Logo>
        </Container>
      </SBox>

      <SBox>
        <Container>
          <Tabs value={valueIndex} variant="scrollable">
            {paths.map(({ label, to }, i) => (
              <Tab key={label} label={label} component={Link} to={to} value={i} />
            ))}
          </Tabs>
        </Container>
      </SBox>
    </>
  );
};

export default Header;
