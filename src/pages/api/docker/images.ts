import { NextApiHandler } from "next";

import docker from "_/docker";

export const execDockerImages = async () =>
  await docker.listImages().then((images) =>
    images.map(({ Id, RepoTags, Size, Created }) => ({
      id: Id,
      tags: RepoTags,
      size: Size,
      created: Created * 1000,
    }))
  );

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await execDockerImages());
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

export default route;
