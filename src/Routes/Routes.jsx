import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts"
<<<<<<< HEAD
import Home from "../Components/HomeLayout.jsx/Home";
=======
import AppCards from "../assets/Components/AppCards";
import HeroBanner from "../assets/Components/HeroBanner";
import Home from "../assets/Components/HomeLayout.jsx/Home";
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
import AppDetails from "../Pages/AppDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import MyProfile from "../Pages/MyProfile";
<<<<<<< HEAD
import PrivetRoute from "../Provider/PrivetRoute";
import Loading from "../Pages/Loading";
=======
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayouts />,
      children: [
        {
          path: '/',
          element: <Home />,
          handle: { title: "Home" },
<<<<<<< HEAD
          loader: () => fetch("/data.json"),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: "/details/:id",
          element: <PrivetRoute>
            <AppDetails />
          </PrivetRoute>,
          handle: { title: "App Details" },
          loader: () => fetch('/data.json').then(res => res.json()),
          hydrateFallbackElement: <Loading></Loading>
=======
          loader: () => fetch("/data.json")
        },
        {
          path: "/details/:id",
          element: <AppDetails />,
          handle: { title: "App Details" },
          loader: () => fetch('/data.json').then(res => res.json())
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
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
