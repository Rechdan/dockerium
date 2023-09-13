import { ReactNode, useCallback, useState } from "react";

import styled from "styled-components";

import { Alert, Box, Button, Card, CardContent, CardHeader, Stack, TextField } from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { InferType } from "yup";

import api from "_/api";

import useSession from "_/hooks/session";

import { loginValidator } from "_/validators";

type AuthProps = {
  children: ReactNode;
};

type FormData = InferType<typeof loginValidator>;

const Page = styled(Box)`
  padding: ${(p) => p.theme.spacing(3, 2)};
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-flow: column;
  display: flex;
`;

const LoginContainer = styled(Card)`
  max-width: 25rem;
  width: 100%;
`;

const Login = () => {
  const [apiError, setApiError] = useState("");

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: yupResolver(loginValidator),
  });

  const onSubmit = useCallback<SubmitHandler<FormData>>(async (data) => {
    try {
      const { data: responseData } = await api.post<Api.User.Login>("/user/login", data);

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
    <Page>
      <LoginContainer>
        <CardHeader title="Login" subheader="If that's the first login, a user will be created" />

        <CardContent>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <Stack useFlexGap gap={2}>
              {apiError && <Alert severity="error">{apiError}</Alert>}

              <TextField
                variant="filled"
                type="email"
                label={errors.email?.message || "Email"}
                error={!!errors.email}
                autoFocus
                inputProps={register("email")}
              />

              <TextField
                variant="filled"
                type="password"
                label={errors.password?.message || "Password"}
                error={!!errors.password}
                inputProps={register("password")}
              />

              <Button type="submit" variant="contained" size="large">
                Login
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </LoginContainer>
    </Page>
  );
};

const Auth = ({ children }: AuthProps) => {
  const session = useSession();

  if (session === null) {
    return null;
  }

  if (session) {
    return <>{children}</>;
  }

  return <Login />;
};

export default Auth;
