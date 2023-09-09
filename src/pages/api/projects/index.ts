import { NextApiHandler } from "next";

import db from "_/db";

export const getData = async () => {
  const projects = await db.project.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      environments: { select: { _count: { select: { applications: true } } } },
      _count: { select: { environments: true } },
    },
    orderBy: { name: "asc" },
  });

  return projects.map(({ id, name, slug, environments, _count }) => ({
    id,
    name,
    slug,
    environments: _count.environments,
    applications: environments.reduce((count, { _count: { applications } }) => count + applications, 0),
  }));
};

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await getData());
  } catch {
    res.status(500).end();
  }
};

export default route;
