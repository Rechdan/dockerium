import { Outlet } from "react-router-dom";

import { Container } from "_/components/container";
import { Page } from "_/components/page";

import Subnav from "_/app/subnav";
import Topnav from "_/app/topnav";

const Dashboard = () => (
  <Page>
    <Topnav />
    <Subnav />
    <Container $flexGrow="1" $flexShrink="1" $padding="2rem 1rem">
      <Outlet />
    </Container>
  </Page>
);

export default Dashboard;
