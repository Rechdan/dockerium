import Docker from "dockerode";

const globalDocker = globalThis as unknown as {
  docker?: Docker;
};

const docker = globalDocker.docker ?? new Docker();

export default docker;

if (process.env.NODE_ENV !== "production") globalDocker.docker = docker;
