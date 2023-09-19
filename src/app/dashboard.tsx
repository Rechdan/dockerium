import { Box, Container, Stack } from "@mui/material";

import { Outlet } from "react-router-dom";

import Header from "_/app/header";

const Dashboard = () => (
  <Box component={Stack} minHeight="100vh">
    <Header />
    <Container component={Stack} flexGrow={1} py={3}>
      <Outlet />
    </Container>
  </Box>
);

export default Dashboard;
