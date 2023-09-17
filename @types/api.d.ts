import { execDashboard } from "_/pages/api/dashboard";
import { execDockerContainers } from "_/pages/api/docker/containers";
import { execDockerImages } from "_/pages/api/docker/images";
import { execProjects } from "_/pages/api/projects";
import { execUserAuth } from "_/pages/api/user/auth";
import { execUserLogin } from "_/pages/api/user/login";

declare global {
  module Api {
    module Dashboard {
      type Index = Awaited<ReturnType<typeof execDashboard>>;
    }

    module Docker {
      type Containers = Awaited<ReturnType<typeof execDockerContainers>>;
      type Images = Awaited<ReturnType<typeof execDockerImages>>;
    }

    module Projects {
      type Index = Awaited<ReturnType<typeof execProjects>>;
    }

    module User {
      type Login = Awaited<ReturnType<typeof execUserLogin>>;
      type Auth = Awaited<ReturnType<typeof execUserAuth>>;
    }
  }
}
