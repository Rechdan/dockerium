import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "_/app/dashboard";
import DockerIndex from "_/app/docker";
import DockerContainers from "_/app/docker/containers";
import DockerImages from "_/app/docker/images";
import GithubIndex from "_/app/github";
import HomeIndex from "_/app/home";
import ProjectsIndex from "_/app/projects";
import UsersIndex from "_/app/users";

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/*" element={<Dashboard />}>
        <Route path="" element={<HomeIndex />} />
        <Route path="docker/*" element={<DockerIndex />}>
          <Route path="" element={<Navigate to="containers" />} />
          <Route path="containers" element={<DockerContainers />} />
          <Route path="images" element={<DockerImages />} />
        </Route>
        <Route path="users" element={<UsersIndex />} />
        <Route path="githubs" element={<GithubIndex />} />
        <Route path="projects/*">
          <Route path="" element={<ProjectsIndex />} />
          <Route path=":projectId/*">
            <Route path="" element={<h1>Root Project Id</h1>} />
            <Route path=":envId/*">
              <Route path="" element={<h1>Root Project Env Id</h1>} />
              <Route path=":appId/*">
                <Route path="" element={<h1>Root Project Env App Id</h1>} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  </HashRouter>
);

export default Router;
