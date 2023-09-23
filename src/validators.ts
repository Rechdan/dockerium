import { Octokit } from "@octokit/core";
import * as yup from "yup";

export const loginValidator = yup.object().shape({
  email: yup.string().label("Email").email().required(),
  password: yup.string().label("Password").min(4).required(),
});

export const newGithubUserValidator = yup.object().shape({
  accessToken: yup
    .string()
    .label("Access Token")
    .test("checkScopes", "${path} is missing scopes", async (value) => {
      try {
        const github = new Octokit({ auth: value });

        await github.auth();

        await github.request("GET /rate_limit", {});

        return true;
      } catch {
        return false;
      }
    })
    .required(),
});
