import { NextApiHandler } from "next";

import docker from "_/docker";

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await docker.listNetworks());
  } catch {
    res.status(500).end();
  }
};

export default route;
