import useSWR, { mutate } from "swr";

import api from "_/api";

import useUserSession from "_/stores/user-session";

const key = ["githubs"].join("/");

export const refreshGithubsIndex = () => mutate(key);

const useGithubsIndex = () => {
  const [jwt] = useUserSession((s) => [s.jwt]);

  return useSWR(jwt && key, () => api.get<Api.Githubs.Index>(key).then((r) => r.data), { refreshInterval: 2000 });
};

export default useGithubsIndex;
