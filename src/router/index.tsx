import { ROUTER } from "constants/router";
import CustomLayout from "layout";
import Profile from "pages/profile";
import Users from "pages/users";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    // path: ROUTER.HOME,
    element: <CustomLayout />,
    children: [
      {
        path: ROUTER.USERS,
        element: <Users />,
      },
      {
        path: ROUTER.PROFILE,
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTER.PROFILE} />,
  },
]);
