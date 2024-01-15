import { useCallback, useState } from "react";

import {
  Alert,
  Backdrop,
  Box,
  Button,
  Card,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link as MaterialLink,
  Stack,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { InferType } from "yup";

import api from "_/api";

import { fromNow } from "_/helpers";

import { newGithubUserValidator } from "_/validators";

import githubRepoHook from "_/imgs/github-settings-repo-hook.png";
import githubRepo from "_/imgs/github-settings-repo.png";

import useGithubsIndex from "_/hooks/githubs";

import { PageTitle } from "_/components/shared/page";
import Table from "_/components/shared/table";

type FormData = InferType<typeof newGithubUserValidator>;

const Add = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(newGithubUserValidator),
  });

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const onExit = useCallback(() => {
    clearErrors("root");

    reset({
      accessToken: "",
    });
  }, [clearErrors, reset]);

  const onSubmit = useCallback<SubmitHandler<FormData>>(async (data) => {
    try {
      const { data: responseData } = await api.post<ApiUserLogin>("/user/login", data);

      if (responseData) {
        const { jwt, error } = responseData;

        if (jwt) {
          // success message
        } else if (error) {
          setApiError(error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <Button variant="contained" size="small" onClick={open}>
        Add
      </Button>

      <Dialog open={isOpen} onClose={close} onTransitionExited={onExit} fullWidth maxWidth="sm">
        <DialogTitle>New GitHub</DialogTitle>

        <DialogContent>
          <Stack useFlexGap gap={2}>
            <DialogContentText>
              To generate an Access Token you can go{" "}
              <MaterialLink component={Link} to="https://github.com/settings/tokens" target="_blank" underline="hover">
                here
              </MaterialLink>
              .
            </DialogContentText>

            <Stack useFlexGap gap={1}>
              <Stack component={Link} to={`${location.origin}${githubRepo.src}`} target="_blank">
                <Box component="img" src={githubRepo.src} width="100%" height="auto" maxWidth={githubRepo.width} borderRadius={1} />
              </Stack>

              <Stack component={Link} to={`${location.origin}${githubRepoHook.src}`} target="_blank">
                <Box component="img" src={githubRepoHook.src} width="100%" height="auto" maxWidth={githubRepoHook.width} borderRadius={1} />
              </Stack>
            </Stack>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
              <Stack useFlexGap gap={2}>
                {apiError && (
                  <Alert severity="error" variant="filled">
                    {apiError}
                  </Alert>
                )}

                <TextField
                  variant="filled"
                  type="text"
                  label={errors.accessToken?.message || "Access Token"}
                  error={!!errors.accessToken}
                  autoFocus
                  inputProps={register("accessToken")}
                />

                <Stack direction="row" useFlexGap gap={2} justifyContent="flex-end">
                  <Button type="reset" variant="text" onClick={close}>
                    Close
                  </Button>

                  <Button type="submit" variant="contained">
                    Continue
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Actions = () => (
  <Stack flexGrow={1} direction="row" useFlexGap gap={2} justifyContent="flex-end">
    <Add />
  </Stack>
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
              <TableCell>{fromNow(new Date(updated))}</TableCell>
              <TableCell>{fromNow(new Date(created))}</TableCell>
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
