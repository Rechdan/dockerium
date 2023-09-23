import { Refresh } from "@mui/icons-material";
import { Backdrop, Card, CircularProgress, IconButton, Stack, TableBody, TableCell, TableHead, TableRow, Tooltip } from "@mui/material";

import { formatDistance } from "date-fns";

import useDockerImages from "_/hooks/docker/images";

import Table from "_/components/shared/table";

const DockerImages = () => {
  const { data, isLoading } = useDockerImages();

  if (!data || isLoading) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  }

  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Labels</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Containers</TableCell>
            <TableCell>Created</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(({ id, tags, size, containers, created }) => (
            <TableRow key={id} hover>
              <TableCell>{id}</TableCell>

              <TableCell>
                {tags?.map((tag, i) => (
                  <div key={i}>{tag}</div>
                ))}
              </TableCell>

              <TableCell>{size}</TableCell>

              <TableCell>{containers}</TableCell>

              <TableCell>{formatDistance(created, Date.now(), { addSuffix: true })}</TableCell>

              <TableCell size="small">
                <Stack direction="row" useFlexGap gap={1} justifyContent="flex-end" alignItems="center">
                  <Tooltip title="Update image">
                    <IconButton size="small" color="primary">
                      <Refresh />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default DockerImages;
