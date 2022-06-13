import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

export const pages = [
    { path: "/login", to: "/login", title: "Login", component: <Login /> },
    { path: "/home", to: "/home", title: "Home", component: <Home /> },
]