import { useMemo } from "react";

import styled from "styled-components";

import { GitHub } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";

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

const Header = () => {
  const pathname = useLocation().pathname;

  const valueIndex = useMemo(() => {
    const index = paths.findIndex((p) => p.pathMatch.test(pathname));
    return Math.max(0, index);
  }, [pathname]);

  return (
    <>
      <SBox>
        <Container>
          <Grid container gap={3} py={2} alignItems="center">
            <Grid item xs>
              <Typography variant="h5" component={Link} to="/">
                Dockerium
              </Typography>
            </Grid>

            <Grid item xs="auto">
              <Grid container gap={2} alignItems="center">
                <Grid item xs="auto">
                  <Link to="https://github.com/Rechdan/dockerium" target="_blank">
                    <IconButton>
                      <GitHub />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
