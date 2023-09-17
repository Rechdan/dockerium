import { Card, CardContent, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import { formatDistance } from "date-fns";

import useDockerContainers from "_/hooks/docker/containers";

const DockerContainers = () => {
  const { data, isLoading } = useDockerContainers();

  if (!data || isLoading) {
    return (
      <Card>
        <CardContent>
          <CircularProgress />
        </CardContent>
      </Card>
    );
  }

  return (
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
  );
};

export default DockerContainers;
