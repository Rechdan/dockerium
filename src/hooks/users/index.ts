import useSWR, { mutate } from "swr";

import api from "_/api";

import useUserSession from "_/stores/user-session";

const key = ["users"].join("/");

export const refreshUsersIndex = () => mutate(key);

const useUsersIndex = () => {
  const [jwt] = useUserSession((s) => [s.jwt]);

  return useSWR(jwt && key, () => api.get<Api.Users.Index>(key).then((r) => r.data), { refreshInterval: 2000 });
};

export default useUsersIndex;
