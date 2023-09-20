import { NextApiHandler } from "next";

import docker from "_/docker";

export const execDockerContainers = async () =>
  await docker.listContainers().then((containers) =>
    containers.map(({ Id, Names, Image, NetworkSettings: { Networks }, Mounts, Created }) => ({
      id: Id.substring(0, 12),
      names: Names,
      image: Image,
      networks: Object.keys(Networks),
      volumes: Object.keys(Mounts.map((m) => m.Name)),
      created: Created * 1000,
    }))
  );

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await execDockerContainers());
  } catch {
    res.status(500).end();
  }
};

export default route;
