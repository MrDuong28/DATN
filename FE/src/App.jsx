import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  const route = useRoutes([
    {
      path: "/home",
      Component: Home,
    },
    {
      path: "/login",
      Component: Login,
    },
    {
      path: "/register",
      Component: Register,
    },
  ]);
  return route;
}

export default App;
