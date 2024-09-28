import React, { createContext, useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import Forbidden from "./pages/status/403";
import NotFound from "./pages/status/404";
import { authManager } from "./functions/authManager";
import toast from "react-hot-toast";
import Dashboard from "./pages/user/Dashboard";
import DiscoverJobs from "./pages/user/DiscoverJobs";
import PostJobs from "./pages/user/PostJobs";
import MyProposal from "./pages/user/MyProposal";
import UserTemplate from "./components/User/UserTemplate";
import { ConfigProvider, theme } from "antd";

export const AuthContext = createContext(null);

function ProtectedRoute({ element }) {
  const { isAuthenticated, isLoading } = React.useContext(AuthContext);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br text-center">
        <h1 className="text-8xl font-bold mb-4 bg-gradient-to-br bg-clip-text">
          Loading
        </h1>
      </div>
    );
  }

  return isAuthenticated ? element : <Navigate to="/403" replace />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      await authManager.init();
      await checkAuthStatus();
    };
    initAuth();
  }, []);

  const checkAuthStatus = async () => {
    setIsLoading(true);
    const authStatus = await authManager.isAuthenticated();
    setIsAuthenticated(authStatus);
    setIsLoading(false);
  };

  const handleLogin = async () => {
    if (isAuthenticated) {
      await authManager.logout();
      setIsAuthenticated(false);
      toast("You have been logged out", { icon: "👋" });
    } else {
      const success = await authManager.login();
      if (success) {
        await checkAuthStatus();
        toast.success("Login successful!");
        <Navigate to="/jobs" replace />;
      }
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // errorElement: <NotFound />,
    },
    {
      path: "/jobs",
      element: <ProtectedRoute element={<UserTemplate />} />,
      children: [
        {
          path: "home",
          element: <Dashboard />,
        },
        {
          path: "find",
          element: <DiscoverJobs />,
        },
        {
          path: "create",
          element: <PostJobs />,
        },
        {
          path: "proposal",
          element: <MyProposal />,
        },
      ],
    },
    {
      path: "/403",
      element: <Forbidden />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  const { darkAlgorithm } = theme; // jadi bisa ubah warna jd dark mode

  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}>
      <AuthContext.Provider
        value={{ isAuthenticated, isLoading, setIsAuthenticated, handleLogin }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </ConfigProvider>
  );
}

export default App;
