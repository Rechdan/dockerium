import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from "_/app/dashboard";
import DockerPage from "_/app/docker";
import Home from "_/app/home";

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/*" element={<Dashboard />}>
        <Route path="" element={<Home />} />
        <Route path="docker/*" element={<DockerPage />}>
          <Route path="" element={<h1>Root</h1>} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>
);

export default Router;
