import path from "node:path/win32";
import { Outlet, RouteObject } from "react-router";
import AccountConfirm from "./content/pages/AccountConfirm";

import Home from "./content/pages/Home";
import LoginPage from "./content/pages/Login";
import PasswordMailSent from "./content/pages/PasswordMailSent";
import PasswordRecover from "./content/pages/PasswordRecover";
import RegisterPage from "./content/pages/Register";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/password-recovery",
    element: (
      <>
        <PasswordRecover index />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "mail-sent",
        element: <PasswordMailSent />,
      },
    ],
  },
  {
    path: "/account-confirm",
    element: <AccountConfirm />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];

export default routes;
