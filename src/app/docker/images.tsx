import { Card, CardContent, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import { formatDistance } from "date-fns";

import useDockerImages from "_/hooks/docker/images";

const DockerImages = () => {
  const { data, isLoading } = useDockerImages();

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
          <TableCell>Labels</TableCell>
          <TableCell>Size</TableCell>
          <TableCell>Created</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map(({ id, tags, size, created }) => (
          <TableRow key={id} hover>
            <TableCell>{id}</TableCell>

            <TableCell>
              {tags?.map((tag, i) => (
                <div key={i}>{tag}</div>
              ))}
            </TableCell>

            <TableCell>{size}</TableCell>

            <TableCell>{formatDistance(created, Date.now(), { addSuffix: true })}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DockerImages;
