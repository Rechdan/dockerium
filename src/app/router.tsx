import { HashRouter, Outlet, Route, Routes } from "react-router-dom";

import DashboardPage from "_/app/dashboard";
import DockerPage from "_/app/docker";
import HomePage from "_/app/home";

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/*" element={<DashboardPage />}>
        <Route path="" element={<HomePage />} />
        <Route path="docker/*" element={<DockerPage />}>
          <Route path="" element={<h1>Root</h1>} />
        </Route>
        <Route path="projects/*" element={<Outlet />}>
          <Route path="" element={<h1>Root Projects</h1>} />
          <Route path=":projectId/*" element={<Outlet />}>
            <Route path="" element={<h1>Root Project Id</h1>} />
            <Route path="environments/*" element={<Outlet />}>
              <Route path="" element={<h1>Root Project Environment</h1>} />
              <Route path=":environmentId/*" element={<Outlet />}>
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
