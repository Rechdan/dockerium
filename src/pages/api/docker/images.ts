import { NextApiHandler } from "next";

import docker from "_/docker";

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await docker.listImages());
  } catch {
    res.status(500).end();
  }
};

export default route;
