import { NextApiHandler, NextApiRequest } from "next";

import docker from "_/docker";

export const execDockerImagesDownload = async (req: NextApiRequest) => {
  if (req.method !== "post") return { invalidMethod: true };

  const tag = req.body["tag"];

  docker.pull(tag, {}, (err, res) => {
    console.log("docker-download", JSON.stringify({ err, res }));
  });

  return { pulling: true };
};

const route: NextApiHandler = async (req, res) => {
  try {
    res.json(await execDockerImagesDownload(req));
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

export default route;
