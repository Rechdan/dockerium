import { Alert, Backdrop, Card, CircularProgress, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import { formatDistance } from "date-fns";

import useGithubsIndex from "_/hooks/githubs";

import { PageTitle } from "_/components/shared/page";
import Table from "_/components/shared/table";

const GithubsTable = () => {
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
  <>
    <PageTitle>Github</PageTitle>

    <GithubsTable />
  </>
);

export default GithubsIndex;
