import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts"
import AppCards from "../assets/Components/AppCards";
import HeroBanner from "../assets/Components/HeroBanner";
import Home from "../assets/Components/HomeLayout.jsx/Home";
import AppDetails from "../Pages/AppDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import MyProfile from "../Pages/MyProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayouts />,
      children: [
        {
          path: '/',
          element: <Home />,
          handle: { title: "Home" },
          loader: () => fetch("/data.json")
        },
        {
          path: "/details/:id",
          element: <AppDetails />,
          handle: { title: "App Details" },
          loader: () => fetch('/data.json').then(res => res.json())
        },
        {
          path: "/auth/login",
          element: <Login />,
          handle: { title: "Login" }
        },
        {
          path: "/auth/register",
          element: <Register />,
          handle: { title: "Register" }
        },
        {
          path: "/auth/my-profile",
          element: <MyProfile />,
          handle: { title: "My Profile" }
        },
      ]
    },
    {
      path: "/auth",
      element: <h2>Authentication</h2>,
      handle: { title: "Authentication" }
    },
    {
      path: '/*',
      element: <ErrorPage />,
      handle: { title: "404 - Page Not Found" }
    }
  ]);
  

export default router;
