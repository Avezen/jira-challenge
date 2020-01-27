export interface INavItem {
  name: string;
  label: string;
  to: string;
  nestedRoutes: INavItem[];
}
