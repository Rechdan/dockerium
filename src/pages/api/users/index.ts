import { NextApiHandler } from "next";

import db from "_/db";

export const execUsersIndex = async () =>
  await db.user.findMany().then((users) =>
    users.map(({ id, email, name, updated, created }) => ({
      id,
      email,
      name,
      updated: updated.getTime(),
      created: created.getTime(),
    }))
  );

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await execUsersIndex());
  } catch {
    res.status(500).end();
  }
};

export default route;
