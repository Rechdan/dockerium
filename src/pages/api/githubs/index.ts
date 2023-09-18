import { NextApiHandler } from "next";

import db from "_/db";

export const execGithubsIndex = async () =>
  await db.github.findMany().then((githubs) =>
    githubs.map(({ id, accessToken, updated, created }) => ({
      id,
      accessToken: accessToken.replace(/./gm, "*"),
      updated: updated.getTime(),
      created: created.getTime(),
    }))
  );

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await execGithubsIndex());
  } catch {
    res.status(500).end();
  }
};

export default route;
