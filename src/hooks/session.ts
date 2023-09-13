import useSWR from "swr";

import api from "_/api";

import useUserSession from "_/stores/user-session";

const useSession = () => {
  const [jwt] = useUserSession((s) => [s.jwt]);

  const { data, isLoading } = useSWR(jwt && ["user", "auth"], () => api.get<Api.User.Auth>("/user/auth"));

  if (isLoading && !data) {
    return null;
  }

  const apiRes = data?.data;

  if (apiRes && apiRes.user) {
    return apiRes.user;
  }

  return false;
};

export default useSession;
