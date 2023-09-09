import useApi from "_/hooks/api";

import { Card, CardBody, CardTitle } from "_/components/card";
import { Col, Row } from "_/components/container";
import { PageTitle } from "_/components/page";

const DockeriumInfo = () => {
  const { data } = useApi<Api.Dashboard.Index>(["dashboard"]);

  if (!data) return null;

  const { users, projects, envs, apps } = data;

  return (
    <Card>
      <CardTitle>This instance info</CardTitle>

      <CardBody>
        <p>
          <b>{users}</b> users
        </p>

        <p>
          <b>{projects}</b> projects
        </p>

        <p>
          <b>{envs}</b> environments
        </p>

        <p>
          <b>{apps}</b> applications
        </p>
      </CardBody>
    </Card>
  );
};

const HomeIndex = () => (
  <>
    <PageTitle>Home page</PageTitle>
    <Row>
      <Col $span={1 / 3}>
        <DockeriumInfo />
      </Col>
    </Row>
  </>
);

export default HomeIndex;
