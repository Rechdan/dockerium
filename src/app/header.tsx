import styled from "styled-components";

import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

import { Link, useLocation } from "react-router-dom";

const SBox = styled(Box)`
  border-bottom: 1px solid ${(p) => p.theme.palette.divider};
`;

const Logo = styled(Box)`
  padding: ${(p) => p.theme.spacing(2, 0)};
`;

const Header = () => {
  const value = useLocation().pathname;

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
          <Tabs value={value} variant="scrollable">
            <Tab label="Dashboard" value="/" component={Link} to="/" />
            <Tab label="Docker" value="/docker" component={Link} to="/docker" />
            <Tab label="Users" value="/users" component={Link} to="/users" />
            <Tab label="Github" value="/githubs" component={Link} to="/githubs" />
            <Tab label="Projects" value="/projects" component={Link} to="/projects" />
          </Tabs>
        </Container>
      </SBox>
    </>
  );
};

export default Header;
