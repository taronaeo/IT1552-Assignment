import React from 'react';
import { Sidenav } from '.';

import './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="grid-container">
    <Sidenav className="fixed bottom-0 w-56 h-full sidenav border-r border-slate-800" />

    <div className="main py-10">
      <main className="w-full h-full main px-10">{children}</main>
    </div>
  </div>
);

export { Layout };
