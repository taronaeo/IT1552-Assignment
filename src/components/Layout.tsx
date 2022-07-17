import React from 'react';

import './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="grid-container text-white bg-zinc-900">
    <header className="header"></header>

    <aside className="sidenav">
      <ul className="sidenav-list">
        <li className="sidenav-list-header">IT1552</li>
        <li className="sidenav-list-item">Dashboard</li>
        <li className="sidenav-list-item">Profile</li>
        <li className="sidenav-list-item">Manage Users</li>
        <li className="sidenav-list-item">Manage Members</li>
        <li className="sidenav-list-item">Manage Events</li>
        <li className="sidenav-list-item">Manage Participations</li>
      </ul>
    </aside>

    <main className="main">{children}</main>

    <footer className="footer"></footer>
  </div>
);

export { Layout };
