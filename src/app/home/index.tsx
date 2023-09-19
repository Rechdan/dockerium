import { Avatar, Card, CardContent, CardHeader, Chip, Stack, Tooltip } from "@mui/material";

import { Link } from "react-router-dom";

import useDashboard from "_/hooks/dashboard";

import { GridContainer, GridItem } from "_/components/shared/grid";
import { PageTitle } from "_/components/shared/page";

const DockerInfo = () => {
  const data = useDashboard()?.data?.docker;

  if (!data) return null;

  const { containers, images, networks, volumes } = data;

  return (
    <Tooltip title="Go to Docker page">
      <Link to="/docker">
        <Card>
          <CardHeader title="Docker Info" subheader="Brief information of your running Docker" />

          <CardContent>
            <Stack direction="row" gap={1} flexWrap="wrap">
              <Chip label="Containers" avatar={<Avatar>{containers}</Avatar>} />
              <Chip label="Images" avatar={<Avatar>{images}</Avatar>} />
              <Chip label="Networks" avatar={<Avatar>{networks}</Avatar>} />
              <Chip label="Volumes" avatar={<Avatar>{volumes}</Avatar>} />
            </Stack>
          </CardContent>
        </Card>
      </Link>
    </Tooltip>
  );
};

const DockeriumInfo = () => {
  const data = useDashboard()?.data?.dockerium;

  if (!data) return null;

  const { users, githubs, projects, envs, apps } = data;

  return (
    <Card>
      <CardHeader title="Dockerium info" subheader="Informations of this Dockerium instance" />

      <CardContent>
        <Stack direction="row" gap={1} flexWrap="wrap">
          <Tooltip title="Go to Users page">
            <Link to="/users">
              <Chip label="Users" avatar={<Avatar>{users}</Avatar>} />
            </Link>
          </Tooltip>

          <Tooltip title="Go to Githubs page">
            <Link to="/githubs">
              <Chip label="Githubs" avatar={<Avatar>{githubs}</Avatar>} />
            </Link>
          </Tooltip>

          <Tooltip title="Go to Projects page">
            <Link to="/projects">
              <Chip label="Projects" avatar={<Avatar>{projects}</Avatar>} />
            </Link>
          </Tooltip>

          <Chip label="Environments" avatar={<Avatar>{envs}</Avatar>} />
          <Chip label="Applications" avatar={<Avatar>{apps}</Avatar>} />
        </Stack>
      </CardContent>
    </Card>
  );
};

const HomeIndex = () => (
  <Stack useFlexGap gap={3}>
    <PageTitle>Home page</PageTitle>

    <GridContainer>
      <GridItem>
        <DockeriumInfo />
      </GridItem>

      <GridItem>
        <DockerInfo />
      </GridItem>
    </GridContainer>
  </Stack>
);

export default HomeIndex;
