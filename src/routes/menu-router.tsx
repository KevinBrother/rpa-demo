import React from 'react';
import loadable from '@loadable/component';

const Start = loadable(() => import('@/pages/start'));
const MenuList = loadable(() => import('@/pages/menu-list'));
const CategoryList = loadable(() => import('@/pages/category-list'));
const CategoryChoose = loadable(() => import('@/pages/category-choose'));

// Demo
const RpaMenuDemo = loadable(() => import('@/pages/demo/rpa-menu-demo'));
const RpaMeTnuDemo = loadable(() => import('@/pages/demo/rpa-menu-demo'));
const IdePageDemo = loadable(() => import('@/pages/ide-page'));

export const MenuRouter = [
  {
    path: 'start',
    element: <Start />
  },
  {
    path: 'RpaMenuDemo', // TODO 做demo的子路由
    element: <RpaMenuDemo />
  },
  {
    path: 'MenuList',
    element: <MenuList />
  },
  {
    path: 'CategoryChoose',
    element: <CategoryChoose />
  },
  {
    path: 'CategoryList',
    element: <CategoryList />
  },
  {
    path: 'IdePageDemo',
    element: <IdePageDemo />
  }
];
