import { ROUTER } from "constants/router";
import CustomLayout from "layout";
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
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTER.USERS} />,
  },
]);
