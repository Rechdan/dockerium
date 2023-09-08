import useSWR from "swr";

import api from "_/api";

const useDockerContainers = () => {
  const { data } = useSWR(["docker", "containers"], () => api.get("/docker/containers").then((r) => r.data));

  return data;
};

export default useDockerContainers;
