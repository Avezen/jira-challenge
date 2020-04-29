import { IRoute, INestedRoute } from '../types/IRoute';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './routes';
import { MainPage } from '../pages/MainPage/MainPage';
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { AdminPage } from "../pages/AdminPage/AdminPage";

export const DEFAULT_ROUTE: string = `/${PUBLIC_ROUTES.MAIN}`;

export const GLOBAL_ROUTES: IRoute[] = [
  {
    Component: MainPage,
    messagePrefix: 'mainPage',
    path: `/${PUBLIC_ROUTES.MAIN}`,
  },
  {
    Component: AboutPage,
    messagePrefix: 'aboutPage',
    path: `/${PUBLIC_ROUTES.ABOUT}`,
  },
  {
    Component: AdminPage,
    messagePrefix: 'adminPage',
    path: `/${PRIVATE_ROUTES.ADMIN}`,
  }
];

