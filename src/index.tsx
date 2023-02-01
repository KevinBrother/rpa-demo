import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
