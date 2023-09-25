import useSWR, { mutate } from "swr";

import api from "_/api";

import useUserSession from "_/stores/user-session";

const key = ["dashboard"].join("/");

export const refreshDashboard = () => mutate(key);

const useDashboard = () => {
  const [jwt] = useUserSession((s) => [s.jwt]);

  return useSWR(jwt && key, () => api.get<ApiDashboard>(key).then((r) => r.data));
};

export default useDashboard;
