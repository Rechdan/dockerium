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
  module Api {
    module Dashboard {
      type Index = Awaited<ReturnType<typeof execDashboard>>;
    }

    module Docker {
      type Containers = Awaited<ReturnType<typeof execDockerContainers>>;
      type Images = Awaited<ReturnType<typeof execDockerImages>>;
      type ImagesDownload = Awaited<ReturnType<typeof execDockerImagesDownload>>;
    }

    module Users {
      type Index = Awaited<ReturnType<typeof execUsersIndex>>;
    }

    module Githubs {
      type Index = Awaited<ReturnType<typeof execGithubsIndex>>;
    }

    module Projects {
      type Index = Awaited<ReturnType<typeof execProjectsIndex>>;
    }

    module User {
      type Login = Awaited<ReturnType<typeof execUserLogin>>;
      type Auth = Awaited<ReturnType<typeof execUserAuth>>;
    }
  }
}
