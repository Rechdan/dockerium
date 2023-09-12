import styled from "styled-components";

import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

import { Link, useLocation } from "react-router-dom";

const SBox = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const Header = () => {
  const value = useLocation().pathname;

  return (
    <>
      <SBox>
        <Container>
          <Typography variant="h5" component="h1" my={2}>
            Dockerium
          </Typography>
        </Container>
      </SBox>

      <SBox>
        <Container>
          <Tabs value={value} variant="scrollable">
            <Tab label="Dashboard" value="/" component={Link} to="/" />
            <Tab label="Docker" value="/docker" component={Link} to="/docker" />
            <Tab label="Github" value="/github" component={Link} to="/github" />
            <Tab label="Projects" value="/projects" component={Link} to="/projects" />
          </Tabs>
        </Container>
      </SBox>
    </>
  );
};

export default Header;
