import React from "react";
import { Route, Routes } from "react-router";
import Endpoints from "./pages/endpoints";
import ActionLogs from "./pages/actionlogs";

const routes = (
  <Routes>
    <Route path="/" element={<Endpoints />} />
    <Route path="/logs" element={<ActionLogs />} />
  </Routes>
);

export default routes;
