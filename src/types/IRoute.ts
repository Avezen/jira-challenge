import { ComponentType } from 'react';

import { WithHelmetProps } from '../hoc/withHelmet';

export interface IRoute {
  path: string;
  Component: ComponentType<any & WithHelmetProps>;
  messagePrefix: string;
  exact?: boolean;
}

export interface INestedRoute extends Pick<IRoute, Exclude<keyof IRoute, 'path'>>{
  path: (parentUrl: string) => string;
}
