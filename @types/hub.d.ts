import "axios";

declare global {
  interface HubSearchResponse {
    page_size: number;
    next: string;
    previous: string;
    page: number;
    count: number;
    summaries: HubSearchSummary[];
  }

  interface HubSearchSummary {
    id: string;
    name: string;
    slug: string;
    type: string;
    publisher: { id: string; name: string };
    created_at: string;
    updated_at: string;
    short_description: string;
    source: string;
    extension_reviewed: boolean;
    popularity: number;
    categories: unknown;
    operating_systems: { name: string; label: string }[];
    architectures: { name: string; label: string }[];
    logo_url: { large: string; small: string };
    certification_status: string;
    star_count: number;
    pull_count: string;
    filter_type: string;
  }

  interface HubTagsResponse {
    count: number;
    next: string;
    previous: unknown;
    results: HubTagsTag[];
  }

  interface HubTagsTag {
    creator: number;
    id: number;
    images: HubTagsImage[];
    last_updated: string;
    last_updater: number;
    last_updater_username: string;
    name: string;
    repository: number;
    full_size: number;
    v2: boolean;
    tag_status: string;
    tag_last_pulled: string;
    tag_last_pushed: string;
    media_type: string;
    content_type: string;
    digest: string;
  }

  interface HubTagsImage {
    architecture: string;
    features: string;
    variant?: string;
    digest: string;
    os: string;
    os_features: string;
    os_version: unknown;
    size: number;
    status: string;
    last_pulled: string;
    last_pushed: string;
  }
}
