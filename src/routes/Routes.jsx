import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefLayout from "../layouts/ChefLayout";
import LoginSignupLayout from "../layouts/LoginSignupLayout";
import Signup from "../pages/Signup/Signup";

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
    element: <ChefLayout />,
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
    ],
  },
]);
export default router;
