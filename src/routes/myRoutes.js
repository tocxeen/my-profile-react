import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../layout/Layout";
import Page404 from "../pages/404";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
