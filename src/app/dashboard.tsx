import styled from "styled-components";

import { Box, Container } from "@mui/material";

import { Outlet } from "react-router-dom";

import Header from "_/app/header";

const PageBox = styled(Box)`
  min-height: 100vh;
  flex-flow: column;
  display: flex;
`;

const ContentContainer = styled(Container)`
  flex: 1 1 auto;
  padding: ${(p) => p.theme.spacing(3)};
`;

const Dashboard = () => (
  <PageBox>
    <Header />
    <ContentContainer>
      <Outlet />
    </ContentContainer>
  </PageBox>
);

export default Dashboard;
