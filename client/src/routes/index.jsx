import { createBrowserRouter } from "react-router-dom";
import { redirect } from "react-router-dom";
import api from "@utils/api";
import cookies from "@utils/cookies";

// components
import Layout from "@components/Layout";

// pages
import Home from "@pages/Home";
import Profile from "@pages/Profile";
import About from "@pages/About";
import Services from "@pages/Services";
import Register from "@pages/Register";
import Login from "@pages/Login";
import ErrorPage from "@pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      const user = cookies.get("user");
      if (!user) {
        return redirect("/login");
      }
      return user;
    },
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",

        element: <Profile />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "register",
    action: async ({ request }) => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      const res = await api.post("/auth/register", data);
      console.log(res.data);
      return null;
    },
    loader: () => {
      const user = cookies.get("user");
      if (!user) return redirect("/login");
      console.log(user);
      return null;
    },
    element: <Register />,
  },
  {
    path: "login",
    action: async ({ request }) => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      const { data: user, status } = await api.post("/auth/login", data);
      if (status === 200) {
        const userInfo = user;
        const stringifyUser = JSON.stringify(userInfo);
        cookies.set("user", stringifyUser, [{ maxAge: 3600 }]);
        return redirect("/");
      }
      return redirect("/login");
    },
    errorElement: <ErrorPage />,
    element: <Login />,
  },
]);

export default router;
