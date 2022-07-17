import React from 'react';

type SidenavProps = {
  className: string;
};

const Sidenav: React.FC<SidenavProps> = (props) => (
  <aside {...props}>
    <div className="px-6 mb-4">
      <ul>
        <li className="sidenav-list-header">IT1552</li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          Dashboard
        </li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          Profile
        </li>
      </ul>

      <hr className="my-5 border-1 border-slate-700" />

      <span className="text-sm text-slate-400 font-bold uppercase">Manage</span>

      <ul>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          Users
        </li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          Members
        </li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          Events
        </li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          Participations
        </li>
      </ul>

      <hr className="my-5 border-1 border-slate-700" />

      <span className="text-sm text-slate-400 font-bold uppercase">
        Session
      </span>

      <ul>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          Settings
        </li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          Sign Out
        </li>
      </ul>
    </div>
  </aside>
);

export { Sidenav };
