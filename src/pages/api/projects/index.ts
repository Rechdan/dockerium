import { NextApiHandler } from "next";

import db from "_/db";

export const getData = () =>
  db.project.findMany({
    select: { id: true, name: true, slug: true },
    orderBy: { name: "asc" },
  });

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await getData());
  } catch {
    res.status(500).end();
  }
};

export default route;
