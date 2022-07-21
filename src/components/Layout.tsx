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
      <Sidenav className="w-full h-full flex flex-col sidenav" />

      <main className="w-full h-full main">{children}</main>
    </div>
  );
};

export { Layout };
