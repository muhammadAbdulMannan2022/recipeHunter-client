import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefLayout from "../layouts/ChefLayout";
import LoginSignupLayout from "../layouts/LoginSignupLayout";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import PrivateRoute from "../pages/Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/chefs"),
      },
    ],
  },
  {
    path: "/chef/:id",
    element: (
      <PrivateRoute>
        <ChefLayout />
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`),
  },
  {
    path: "/1/",
    element: <LoginSignupLayout />,
    children: [
      {
        path: "/1/signup",
        element: <Signup />,
      },
      {
        path: "/1/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
