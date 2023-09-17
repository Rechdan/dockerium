import useSWR, { mutate } from "swr";

import api from "_/api";

import useUserSession from "_/stores/user-session";

const key = ["docker", "containers"].join("/");

export const refreshDockerContainers = () => mutate(key);

const useDockerContainers = () => {
  const [jwt] = useUserSession((s) => [s.jwt]);

  return useSWR(jwt && key, () => api.get<Api.Docker.Containers>(key).then((r) => r.data), { refreshInterval: 2000 });
};

export default useDockerContainers;
