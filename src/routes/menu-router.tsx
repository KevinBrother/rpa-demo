import React from 'react';
import loadable from '@loadable/component';

const Start = loadable(() => import('@/pages/start'));

// Demo
const RpaMenuDemo = loadable(() => import('@/pages/demo/rpa-menu-demo'));
const Visual = loadable(() => import('@/pages/visual'));

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
    path: 'Visual',
    element: <Visual />
  }
];
