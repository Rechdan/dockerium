import styled from "styled-components";

import { Outlet } from "react-router-dom";

import Navbar from "_/app/navbar";
import Sidenav from "_/app/sidenav";

const Container = styled.div`
  min-height: 100vh;
  flex-flow: column;
  overflow: hidden;
  display: flex;
  width: 100%;
`;

const Principal = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  flex-flow: row;
  display: flex;
`;

const Content = styled.div`
  flex: 1 1 auto;
  padding: 1rem 2rem;
  flex-flow: column;
  overflow: auto;
  display: flex;
`;

const DashboardPage = () => (
  <Container>
    <Navbar />
    <Principal>
      <Sidenav />
      <Content>
        <Outlet />
      </Content>
    </Principal>
  </Container>
);

export default DashboardPage;
