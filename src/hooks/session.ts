import useSWR from "swr";

import api from "_/api";

import useUserSession from "_/stores/user-session";

const key = ["user", "auth"].join("/");

const useSession = () => {
  const [jwt] = useUserSession((s) => [s.jwt]);

  const { data, isLoading } = useSWR(jwt && key, () => api.get<ApiUserAuth>(key));

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
