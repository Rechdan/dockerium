import { HTMLAttributes, useCallback, useState } from "react";

import { ImageNotSupported } from "@mui/icons-material";
import { Autocomplete, AutocompleteRenderInputParams, Box, Stack, TextField, Typography } from "@mui/material";

import { fromNow } from "_/helpers";

import useHubSearch from "_/hooks/hub/search";
import useHubTags from "_/hooks/hub/tags";

const EMPTY_SEARCH_OPTIONS: HubSearchSummary[] = [];
const EMPTY_TAGS_OPTIONS: HubTagsTag[] = [];

const searchGetOptionLabel = ({ name }: HubSearchSummary) => name;

const searchRenderInput = (params: AutocompleteRenderInputParams) => <TextField variant="filled" {...params} label="Search for an image" />;

const searchRenderOption = (props: HTMLAttributes<HTMLLIElement>, { logo_url, name, updated_at, star_count, pull_count }: HubSearchSummary) => {
  const logoUrl = logo_url.large || logo_url.small;

  return (
    <li {...props}>
      <Stack direction="row" flexGrow={1} useFlexGap gap={3} alignItems="center">
        {logoUrl ? (
          <Box component={"img"} src={logoUrl} height="4rem" width="4rem" />
        ) : (
          <Box height="4rem" width="4rem" display="flex" justifyContent="center" alignItems="center">
            <ImageNotSupported />
          </Box>
        )}

        <Stack flexGrow={1} useFlexGap gap={0}>
          <Stack direction="row" useFlexGap gap={3} alignItems="center">
            <Stack direction="row" flexGrow={1} useFlexGap gap={3} alignItems="center">
              <Typography>{name}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" useFlexGap gap={3} alignItems="center">
            <Stack direction="row" useFlexGap gap={1} alignItems="center">
              <Typography>Updated {fromNow(new Date(updated_at))}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" flexGrow={1} useFlexGap gap={3} alignItems="center">
            <Stack direction="row" useFlexGap gap={1}>
              <Typography>
                <b>{star_count}</b> stars
              </Typography>
            </Stack>

            <Stack direction="row" useFlexGap gap={1}>
              <Typography>
                <b>{pull_count}</b> pulls
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </li>
  );
};

const searchIsOptionEqualToValue = (option: HubSearchSummary, value: HubSearchSummary) => option.name === value.name;

const searchFilterOptions = (options: HubSearchSummary[]) => options;

type HubImagePickerProps = {
  isOpen: boolean;
};

const HubImagePicker = ({ isOpen }: HubImagePickerProps) => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<HubSearchSummary | null>(null);

  const searchOnChange = useCallback((_: unknown, value: HubSearchSummary | null) => {
    setSelected(value);
  }, []);

  const searchOnInputChange = useCallback((_: unknown, value: string) => {
    setValue(value);
  }, []);

  const search = useHubSearch(isOpen && !!value, value);
  const tags = useHubTags(selected !== null, selected?.name);

  const searchOptions = search.data?.summaries || EMPTY_SEARCH_OPTIONS;
  const tagsOptions = tags.data?.results || EMPTY_TAGS_OPTIONS;

  return (
    <>
      <Autocomplete
        options={searchOptions}
        loading={search.isLoading || search.isValidating}
        value={selected}
        onChange={searchOnChange}
        inputValue={value}
        onInputChange={searchOnInputChange}
        getOptionLabel={searchGetOptionLabel}
        renderInput={searchRenderInput}
        renderOption={searchRenderOption}
        isOptionEqualToValue={searchIsOptionEqualToValue}
        filterOptions={searchFilterOptions}
      />

      <Autocomplete
        disabled={selected === null}
        options={tagsOptions}
        loading={tags.isLoading || tags.isValidating}
        getOptionLabel={({ name }) => name}
        renderInput={(params: AutocompleteRenderInputParams) => <TextField variant="filled" {...params} label="Search for a tag" />}
        renderOption={(props, { name }) => (
          <li {...props}>
            <p>{name}</p>
          </li>
        )}
      />
    </>
  );
};

export default HubImagePicker;
