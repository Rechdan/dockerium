import { NextApiHandler } from "next";

import db from "_/db";

export const getData = async () => {
  const users = await db.user.count();
  const projects = await db.project.count();
  const envs = await db.environment.count();
  const apps = await db.application.count();

  return { users, projects, envs, apps };
};

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await getData());
  } catch {
    res.status(500).end();
  }
};

export default route;
