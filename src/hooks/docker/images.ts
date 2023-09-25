import useSWR, { mutate } from "swr";

import api from "_/api";

import useUserSession from "_/stores/user-session";

const key = ["docker", "images"].join("/");

export const refreshDockerImages = () => mutate(key);

const useDockerImages = () => {
  const [jwt] = useUserSession((s) => [s.jwt]);

  return useSWR(jwt && key, () => api.get<ApiDockerImages>(key).then((r) => r.data));
};

export default useDockerImages;
