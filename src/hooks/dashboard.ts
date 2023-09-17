import useSWR, { mutate } from "swr";

import api from "_/api";

import useUserSession from "_/stores/user-session";

const key = ["dashboard"].join("/");

export const refreshDashboard = () => mutate(key);

const useDashboard = () => {
  const [jwt] = useUserSession((s) => [s.jwt]);

  return useSWR(jwt && key, () => api.get<Api.Dashboard.Index>(key).then((r) => r.data), { refreshInterval: 2000 });
};

export default useDashboard;