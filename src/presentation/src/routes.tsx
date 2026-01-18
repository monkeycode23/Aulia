import { createBrowserRouter } from "react-router";

/* import {Dashboard} from "./pages/Dashboard/index";
import UserDefaultLayout from "./components/layouts/UserDefaultLayout"; */
import PrivateRoute from "./components/PrivateRoute";
/* import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
 */

const router = createBrowserRouter([
    {
        path:"/auth",
        children: [
      /* {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      }, */
    ],
    },
  {
    path: "/",
    element:<>dashboard</> ,
    /* children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/clients/:clientId",
        element:<ClientDetail></ClientDetail>,

      },
      {
        path: "/clients",
        element: <ClientList />,
      },
      
      {
        path: "/payments",
        element: <PaymentsCalendar />,
      },
      {
        path: "/employees",
        element: <>not available</>,
      },

       {
        path: "/settings",
        element: <>not available</>,
      },
       {
        path: "/statics",
        element: <>nt available</>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ], */
  },
]);

export default router;