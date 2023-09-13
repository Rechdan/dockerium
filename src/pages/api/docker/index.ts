import { NextApiHandler } from "next";

import docker from "_/docker";

export const execDocker = async () => {
  const containers = await docker.listContainers();
  const images = await docker.listImages();
  const networks = await docker.listNetworks();
  const volumes = (await docker.listVolumes()).Volumes;

  return {
    containers,
    images,
    networks,
    volumes,
  };
};

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await execDocker());
  } catch {
    res.status(500).end();
  }
};

export default route;
