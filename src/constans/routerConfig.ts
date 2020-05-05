import { IRoute, INestedRoute } from '../types/IRoute';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './routes';
import { MainPage } from '../pages/MainPage/MainPage';
import { AboutPage } from "../pages/About/AboutPage";
import { AdminPage } from "../pages/Admin/AdminPage";
import {LoginPage} from "../pages/Login/LoginPage";

export const DEFAULT_ROUTE: string = `/${PRIVATE_ROUTES.MAIN}`;

export const GLOBAL_ROUTES: IRoute[] = [
  {
    Component: LoginPage,
    messagePrefix: 'loginPage',
    path: `/${PUBLIC_ROUTES.LOGIN}`,
  },
  {
    Component: MainPage,
    messagePrefix: 'mainPage',
    path: `/${PRIVATE_ROUTES.MAIN}`,
  },
  {
    Component: AboutPage,
    messagePrefix: 'aboutPage',
    path: `/${PRIVATE_ROUTES.ABOUT}`,
  },
  {
    Component: AdminPage,
    messagePrefix: 'adminPage',
    path: `/${PRIVATE_ROUTES.ADMIN}`,
  }
];

