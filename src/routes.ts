import { Events, Home } from "./layouts";

export const routes = [
  {
    component: Home,
    path: "/",
    text: "Home",
  },
  {
    component: Events,
    path: "/events",
    text: "Events",
  },
];
