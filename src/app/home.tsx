import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import useApi from "_/hooks/api";

import { GridContainer, GridItem } from "_/components/shared/grid";
import { PageTitle } from "_/components/shared/page";

const DockerInfo = () => {
  const { data } = useApi<Api.Docker.Index>(["docker"]);

  if (!data) return null;

  const { Containers, Images } = data;

  return (
    <Card>
      <CardHeader title="Docker Info" subheader="Brief information of your running Docker" />

      <CardContent>
        <Typography>
          <b>{Containers}</b> containers
        </Typography>

        <Typography>
          <b>{Images}</b> images
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" component={Link} to="/docker">
          Open page
        </Button>
      </CardActions>
    </Card>
  );
};

const DockeriumInfo = () => {
  const { data } = useApi<Api.Dashboard.Index>(["dashboard"]);

  if (!data) return null;

  const { users, projects, envs, apps } = data;

  return (
    <Card>
      <CardHeader title="Dockerium info" subheader="Informations of this Dockerium instance" />

      <CardContent>
        <Typography>
          <b>{users}</b> users
        </Typography>

        <Typography>
          <b>{projects}</b> projects
        </Typography>

        <Typography>
          <b>{envs}</b> environments
        </Typography>

        <Typography>
          <b>{apps}</b> applications
        </Typography>
      </CardContent>
    </Card>
  );
};

const HomeIndex = () => (
  <>
    <PageTitle>Home page</PageTitle>

    <GridContainer>
      <GridItem>
        <DockeriumInfo />
      </GridItem>

      <GridItem>
        <DockerInfo />
      </GridItem>
    </GridContainer>
  </>
);

export default HomeIndex;
