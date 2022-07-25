import React from 'react';
import { Header } from '../components/Header';
import { Sidenav } from '../components/Sidenav';

import './index.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="grid-container">
    <Header className="w-full h-full pt-8 header" />
    <Sidenav className="w-full h-full sidenav border-r border-slate-800" />

    <main className="w-full h-full main px-10">{children}</main>
  </div>
);

export { Layout };