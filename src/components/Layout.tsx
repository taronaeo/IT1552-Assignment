import React from 'react';
import { Header } from './Header';
import { Sidenav } from './Sidenav';

import './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid-container">
      <Header className="w-full h-full pt-8 header" />
      <Sidenav className="w-full h-full sidenav border-r border-slate-800" />

      <main className="w-full h-full main px-10">{children}</main>
    </div>
  );
};

export { Layout };
