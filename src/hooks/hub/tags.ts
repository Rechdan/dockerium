import axios from "axios";
import useSWR from "swr";

const useHubTags = (enabled = false, search = "") => {
  return useSWR(enabled && ["hub", "tags", search], () =>
    axios
      .get<HubTagsResponse>(`/hub/v2/repositories/library/${search}/tags`, {
        params: {
          ordering: "last_updated",
          page_size: 100,
          page: 1,
        },
      })
      .then((r) => r.data)
  );
};

export default useHubTags;
