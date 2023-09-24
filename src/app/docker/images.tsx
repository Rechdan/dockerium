import { Refresh } from "@mui/icons-material";
import { Alert, Backdrop, Card, CircularProgress, IconButton, Stack, TableBody, TableCell, TableHead, TableRow, Tooltip } from "@mui/material";

import { formatDistance } from "date-fns";

import useDockerImages from "_/hooks/docker/images";

import { PageTitle } from "_/components/shared/page";
import Table from "_/components/shared/table";

import AddImage from "_/app/docker/add-image";

export const DockerImagesTitle = () => (
  <Stack direction="row" useFlexGap gap={3}>
    <PageTitle>Docker Images</PageTitle>

    <Stack flexGrow={1} direction="row" useFlexGap gap={1} alignItems="center" justifyContent="flex-end">
      <AddImage />
    </Stack>
  </Stack>
);

const DockerImages = () => {
  const { data, isLoading } = useDockerImages();

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
        No images found.
      </Alert>
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
