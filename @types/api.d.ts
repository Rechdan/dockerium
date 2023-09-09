import { getData as dashboardIndex } from "_/pages/api/dashboard";
import { getData as projectsIndex } from "_/pages/api/projects";

declare global {
  module Api {
    module Dashboard {
      type Index = Awaited<ReturnType<typeof dashboardIndex>>;
    }

    module Docker {
      type Index = {
        ID: string;
        Containers: number;
        ContainersRunning: number;
        ContainersPaused: number;
        ContainersStopped: number;
        Images: number;
        KernelVersion: string;
        NCPU: number;
        MemTotal: number;
        Name: string;
        ServerVersion: string;
      };
    }

    module Projects {
      type Index = Awaited<ReturnType<typeof projectsIndex>>;
    }
  }
}
