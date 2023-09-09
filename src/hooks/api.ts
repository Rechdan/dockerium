import useSWR from "swr";

import api from "_/api";

const useApi = <T = unknown>(path: string[]) => {
  return useSWR(path, () => api.get<T>(`/${path.join("/")}`).then((r) => r.data));
};

export default useApi;
