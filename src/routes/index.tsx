import React from 'react';
import { BaseRouter } from './base-router';
import { MenuRouter } from './menu-router';
import { useRoutes, Link, BrowserRouter } from 'react-router-dom';

function Container() {
  const element = useRoutes(MenuRouter.concat(BaseRouter));
  // return <div style={{ marginLeft: '30px' }}>{element}</div>;
  return <div className='ml-10 flex-1'>{element}</div>;
}

function Root() {
  return (
    <BrowserRouter>
      <div className='flex h-full'>
        <ul>
          {MenuRouter.map((router) => {
            const { path } = router;
            return (
              <li key={path}>
                <Link to={path}>{path.replace('/', '')}</Link>
              </li>
            );
          })}
        </ul>
        <Container />
      </div>
    </BrowserRouter>
  );
}

export default Root;
