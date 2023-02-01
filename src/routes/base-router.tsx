import React from 'react';
import Start from '@/pages/start';

export const BaseRouter = [
  {
    path: '*',
    element: <>Welcome to hooks</>
  },
  {
    path: '/',
    element: <Start />
  }
];
