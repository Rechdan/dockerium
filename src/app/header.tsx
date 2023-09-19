import { useMemo } from "react";

import styled from "styled-components";

import { GitHub } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";

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
          <Stack direction="row" useFlexGap gap={3} py={2} alignItems="center">
            <Typography variant="h5" component={Link} to="/">
              Dockerium
            </Typography>

            <Stack flexGrow={1} direction="row" useFlexGap gap={2} justifyContent="flex-end" alignItems="center">
              <Link to="https://github.com/Rechdan/dockerium" target="_blank">
                <IconButton>
                  <GitHub />
                </IconButton>
              </Link>
            </Stack>
          </Stack>
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
