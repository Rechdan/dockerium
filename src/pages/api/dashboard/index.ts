import { NextApiHandler } from "next";

import db from "_/db";
import docker from "_/docker";

export const execDashboard = async () => {
  const users = await db.user.count();
  const githubs = await db.github.count();
  const projects = await db.project.count();
  const envs = await db.environment.count();
  const apps = await db.application.count();

  const containers = (await docker.listContainers()).length;
  const images = (await docker.listImages()).length;
  const networks = (await docker.listNetworks()).length;
  const volumes = (await docker.listVolumes()).Volumes.length;

  return {
    dockerium: { users, githubs, projects, envs, apps },
    docker: { containers, images, networks, volumes },
  };
};

const route: NextApiHandler = async (_req, res) => {
  try {
    res.json(await execDashboard());
  } catch {
    res.status(500).end();
  }
};

export default route;
