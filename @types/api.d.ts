import { execDashboard } from "_/pages/api/dashboard";
import { execDockerContainers } from "_/pages/api/docker/containers";
import { execDockerImages } from "_/pages/api/docker/images";
import { execDockerImagesDownload } from "_/pages/api/docker/images/download";
import { execGithubsIndex } from "_/pages/api/githubs";
import { execProjectsIndex } from "_/pages/api/projects";
import { execUserAuth } from "_/pages/api/user/auth";
import { execUserLogin } from "_/pages/api/user/login";
import { execUsersIndex } from "_/pages/api/users";

declare global {
  type ApiDashboard = Awaited<ReturnType<typeof execDashboard>>;

  type ApiDockerContainers = Awaited<ReturnType<typeof execDockerContainers>>;
  type ApiDockerImages = Awaited<ReturnType<typeof execDockerImages>>;
  type ApiDockerImagesDownload = Awaited<ReturnType<typeof execDockerImagesDownload>>;

  type ApiUsers = Awaited<ReturnType<typeof execUsersIndex>>;

  type ApiGithubs = Awaited<ReturnType<typeof execGithubsIndex>>;

  type ApiProjects = Awaited<ReturnType<typeof execProjectsIndex>>;

  type ApiUserLogin = Awaited<ReturnType<typeof execUserLogin>>;
  type ApiUserAuth = Awaited<ReturnType<typeof execUserAuth>>;
}
