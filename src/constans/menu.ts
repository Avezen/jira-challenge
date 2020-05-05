import {PRIVATE_ROUTES, PUBLIC_ROUTES} from './routes';

export const menuItems = [
  {
    label: 'main',
    to: `/${PRIVATE_ROUTES.MAIN}`
  },
  {
    label: 'about',
    to: `/${PRIVATE_ROUTES.ABOUT}`,
  },
  {
    label: 'admin',
    to: `/${PRIVATE_ROUTES.ADMIN}`,
  }
];

