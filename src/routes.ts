import {
  ContactUs,
  Events,
  Home,
  Sponsors,
} from "./layouts"


export const routes = [
  {
    component: Home,
    path: '/',
    text: 'Home',
  },
  {
    component: Events,
    path: '/events',
    text: 'Events',
  },
  {
    component: Sponsors,
    path: '/sponsors',
    text: 'Sponsors',
  },
  {
    component: ContactUs,
    path: '/contact-us',
    text: 'Contact Us',
  },
];
