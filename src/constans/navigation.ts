import { INavItem } from '../types/INavItem';
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from './routes';

export const navigationItems: INavItem[] = [
  {
    name: 'main',
    label: 'main',
    to: `${PUBLIC_ROUTES.MAIN}`,
    nestedRoutes: [

    ]
  },
  {
    name: 'about',
    label: 'about',
    to: `${PUBLIC_ROUTES.ABOUT}`,
    nestedRoutes: [
      {
        name: 'cos',
        label: 'cos',
        to: 'cos',
        nestedRoutes: []
      }
    ]
  },
  {
    name: 'admin',
    label: 'admin',
    to: `${PRIVATE_ROUTES.ADMIN}`,
    nestedRoutes: []
  },
];
