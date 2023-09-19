import { useCallback, useState } from "react";

import {
  Alert,
  Backdrop,
  Button,
  Card,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { formatDistance } from "date-fns";

import useGithubsIndex from "_/hooks/githubs";

import { PageTitle } from "_/components/shared/page";
import Table from "_/components/shared/table";

const Add = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Button variant="contained" size="small" onClick={open}>
        Add
      </Button>

      <Dialog open={isOpen} onClose={close} fullWidth maxWidth="xs">
        <DialogTitle>New GitHub</DialogTitle>
        <DialogContent>OK</DialogContent>
      </Dialog>
    </>
  );
};

const Actions = () => (
  <Grid container>
    <Grid item xs />
    <Grid item xs="auto">
      <Add />
    </Grid>
  </Grid>
);

const ItemsTable = () => {
  const { data, isLoading } = useGithubsIndex();

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
        No github found.
      </Alert>
    );
  }

  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Access Token</TableCell>
            <TableCell>Updated</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(({ id, accessToken, updated, created }) => (
            <TableRow key={id} hover>
              <TableCell>{id}</TableCell>
              <TableCell>{accessToken}</TableCell>
              <TableCell>{formatDistance(updated, Date.now(), { addSuffix: true })}</TableCell>
              <TableCell>{formatDistance(created, Date.now(), { addSuffix: true })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

const GithubsIndex = () => (
  <Stack useFlexGap gap={3}>
    <Stack useFlexGap gap={3} direction="row" alignItems="center">
      <PageTitle>Github</PageTitle>

      <Actions />
    </Stack>

    <ItemsTable />
  </Stack>
);

export default GithubsIndex;
