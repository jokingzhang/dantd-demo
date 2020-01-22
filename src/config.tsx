import Home from 'pages/Home';
import Component from 'pages/Component';

export interface IRouteCfgProps {
  key: string;
  title: string;
  path: string;
  exact?: boolean;
  inMenu?: boolean;
  hide?: boolean;
  component: React.ComponentType<any>;
}

export const routeCfg: IRouteCfgProps[] = [
  {
    key: 'home',
    title: '首页',
    exact: true,
    component: Home,
    inMenu: true,
    path: '/',
  },
  {
    key: 'comp',
    title: '组件',
    exact: true,
    component: Component,
    inMenu: true,
    path: '/comp',
  },
];
