import useApi from "_/hooks/api";

import { Card, CardBody, CardTitle } from "_/components/card";
import { Col, Row } from "_/components/container";
import { PageTitle } from "_/components/page";

const DockerInfo = () => {
  const { data } = useApi<Api.Docker.Index>(["docker"]);

  if (!data) {
    return null;
  }

  const { Containers, ContainersRunning, ContainersPaused, ContainersStopped, Images, KernelVersion, NCPU, MemTotal, ServerVersion } = data;

  return (
    <Row>
      <Col $span={1 / 3}>
        <Card>
          <CardTitle>
            <b>{Containers}</b> containers
          </CardTitle>
          <CardBody>
            <p>{ContainersRunning} running</p>
            <p>{ContainersPaused} paused</p>
            <p>{ContainersStopped} stopped</p>
          </CardBody>
        </Card>
      </Col>

      <Col $span={1 / 3}>
        <Card>
          <CardTitle>
            <b>{Images}</b> images
          </CardTitle>
        </Card>
      </Col>

      <Col $span={1 / 3}>
        <Card>
          <CardTitle>Info</CardTitle>
          <CardBody>
            <p>CPUs: {NCPU}</p>
            <p>Mem: {MemTotal}</p>
            <p>Kernel: {KernelVersion}</p>
            <p>Version: {ServerVersion}</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

const DockerIndex = () => (
  <>
    <PageTitle>Docker</PageTitle>
    <DockerInfo />
  </>
);

export default DockerIndex;
