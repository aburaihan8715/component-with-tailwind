import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import RegistrationRelated from "../pages/RegistrationRelated";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <RegistrationRelated />,
      },
    ],
  },
]);
