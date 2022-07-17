import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './router';
import { Layout } from './components/Layout';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>,
);
