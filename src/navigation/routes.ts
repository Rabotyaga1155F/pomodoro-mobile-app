import {IRoute} from './navigation.types.ts';
import Home from '../components/pages/home/Home.tsx';

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home,
  },
];
