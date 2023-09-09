import { HashRouter, Route, Routes } from "react-router-dom";

import DashboardPage from "_/app/dashboard";
import DockerPage from "_/app/docker";
import HomePage from "_/app/home";
import ProjectsHome from "_/app/projects";

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/*" element={<DashboardPage />}>
        <Route path="" element={<HomePage />} />
        <Route path="docker" element={<DockerPage />} />
        <Route path="projects/*">
          <Route path="" element={<ProjectsHome />} />
          <Route path=":projectId/*">
            <Route path="" element={<h1>Root Project Id</h1>} />
            <Route path="environments/*">
              <Route path="" element={<h1>Root Project Environment</h1>} />
              <Route path=":environmentId/*">
                <Route path="" element={<h1>Root Project Environment Id</h1>} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  </HashRouter>
);

export default Router;
