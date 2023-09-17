import { Alert, Backdrop, Card, CircularProgress, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import { formatDistance } from "date-fns";

import useUsersIndex from "_/hooks/users";

import { PageTitle } from "_/components/shared/page";
import Table from "_/components/shared/table";

const UsersTable = () => {
  const { data, isLoading } = useUsersIndex();

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
        No user found.
      </Alert>
    );
  }

  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Updated</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(({ id, email, name, updated, created }) => (
            <TableRow key={id} hover>
              <TableCell>{id}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{formatDistance(updated, Date.now(), { addSuffix: true })}</TableCell>
              <TableCell>{formatDistance(created, Date.now(), { addSuffix: true })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

const UsersIndex = () => (
  <>
    <PageTitle>Users</PageTitle>

    <UsersTable />
  </>
);

export default UsersIndex;
