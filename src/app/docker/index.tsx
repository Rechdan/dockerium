import { useMemo } from "react";

import { Card, Stack, Tab, Tabs } from "@mui/material";

import { Link, Outlet, useLocation } from "react-router-dom";

import { PageTitle } from "_/components/shared/page";

type Path = {
  label: string;
  pathMatch: RegExp;
  to: string;
};

const paths: Path[] = [
  { label: "Containers", pathMatch: /^\/docker\/containers/, to: "/docker/containers" },
  { label: "Images", pathMatch: /^\/docker\/images/, to: "/docker/images" },
];

const DockerIndex = () => {
  const pathname = useLocation().pathname;

  const valueIndex = useMemo(() => {
    const index = paths.findIndex((p) => p.pathMatch.test(pathname));
    return Math.max(0, index);
  }, [pathname]);

  return (
    <Stack useFlexGap gap={3}>
      <PageTitle>Docker</PageTitle>

      <Stack direction="column" useFlexGap gap={3}>
        <Card>
          <Tabs value={valueIndex} variant="scrollable">
            {paths.map(({ label, to }, i) => (
              <Tab key={label} label={label} component={Link} to={to} value={i} />
            ))}
          </Tabs>
        </Card>

        <Outlet />
      </Stack>
    </Stack>
  );
};

export default DockerIndex;
