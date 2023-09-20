import { NextApiHandler } from "next";

import docker from "_/docker";

export const execDockerImages = async () => {
  const containers = await docker.listContainers();

  return await docker.listImages().then((images) =>
    images.map(({ Id, RepoTags, Size, Created }) => ({
      id: Id.substring(7, 12 + 7),
      tags: RepoTags,
      size: Size,
      containers: containers.filter((c) => c.ImageID === Id).length,
      created: Created * 1000,
    }))
  );
};

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await execDockerImages());
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

export default route;
