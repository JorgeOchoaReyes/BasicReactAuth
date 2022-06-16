import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { MessageDetails } from "../pages/Message/[id]";

export const pages = [
    { path: "/login", to: "/login", title: "Login", component: <Login /> },
    { path: "/home", to: "/home", title: "Home", component: <Home /> },
    { path: "/message/:id", to: "/message/:id", title: "Message Details",  component: <MessageDetails /> }
]