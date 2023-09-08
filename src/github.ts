import { Octokit } from "@octokit/core";

const globalGithub = globalThis as unknown as {
  github?: Octokit;
};

const github = globalGithub.github ?? new Octokit();

export default github;

if (process.env.NODE_ENV !== "production") globalGithub.github = github;
