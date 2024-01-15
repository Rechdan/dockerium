import axios from "axios";
import useSWR from "swr";

const useHubSearch = (enabled = false, search = "") => {
  return useSWR(enabled && ["hub", "search", search], () =>
    axios
      .get<HubSearchResponse>("/hub/api/content/v1/products/search", {
        headers: {
          "Search-Version": "v3",
        },
        params: {
          page_size: 100,
          q: search,
        },
      })
      .then((r) => r.data)
  );
};

export default useHubSearch;
