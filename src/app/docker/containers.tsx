import { Alert, Backdrop, Card, CircularProgress, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import { formatDistance } from "date-fns";

import useDockerContainers from "_/hooks/docker/containers";

import Table from "_/components/shared/table";

const DockerContainers = () => {
  const { data, isLoading } = useDockerContainers();

  if (!data || isLoading) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  }

  if (data.length < 1) {
    return (
      <Alert severity="info" variant="filled">
        No containers found.
      </Alert>
    );
  }

  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Names</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Networks</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(({ id, names, image, networks, created }) => (
            <TableRow key={id} hover>
              <TableCell>{id}</TableCell>

              <TableCell>
                {names.map((name, i) => (
                  <div key={i}>{name}</div>
                ))}
              </TableCell>

              <TableCell>{image}</TableCell>

              <TableCell>
                {networks.map((network, i) => (
                  <div key={i}>{network}</div>
                ))}
              </TableCell>

              <TableCell>{formatDistance(created, Date.now(), { addSuffix: true })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default DockerContainers;
