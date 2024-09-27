import React, { createContext, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/User";
import { authManager } from './functions/authManager'; // Make sure to create this file based on the previous example

export const AuthContext = createContext(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    authManager.init().then(() => {
      checkAuthStatus();
    });
  }, []);

  const checkAuthStatus = async () => {
    const authStatus = await authManager.isAuthenticated();
    setIsAuthenticated(authStatus);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/jobs",
      element: <User />,
    },
  ]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;