import { Events, Home, Sponsors } from "./layouts";

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
  {
    component: Sponsors,
    path: "/sponsors",
    text: "Sponsors",
  },
];
