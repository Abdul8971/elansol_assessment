import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./components/ProtectedRoute/ProtectedRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Logout from "./components/Logout";
import IndexPage from "./pages/IndexPage/IndexPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    if (
      token &&
      (location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/indexPage")
    ) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/indexPage" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <PrivateRoute
              element={<HomePage />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              element={<Dashboard />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute
              element={<Profile />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/logout"
          element={
            <PrivateRoute
              element={<Logout />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
