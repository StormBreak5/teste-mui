import { RouteObject } from "react-router";
import AccountConfirm from "./content/pages/AccountConfirm";

import Home from "./content/pages/Home";
import LoginPage from "./content/pages/Login";
import PasswordMailSent from "./content/pages/PasswordMailSent";
import PasswordRecover from "./content/pages/PasswordRecover";
import Profile from "./content/pages/Profile";
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
    element: <PasswordRecover />,
  },
  {
    path: "/password-recovery/mail-sent",
    element: <PasswordMailSent />,
  },
  {
    path: "/account-confirm",
    element: <AccountConfirm />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];

export default routes;
