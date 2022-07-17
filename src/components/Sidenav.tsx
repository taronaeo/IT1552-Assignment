import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faIdBadge,
  faUser,
  faUserGroup,
  faCalendarDays,
  faClock,
  faGear,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

type SidenavProps = {
  className: string;
};

const Sidenav: React.FC<SidenavProps> = (props) => (
  <aside {...props}>
    <div className="px-6 mt-8 mb-4">
      <ul>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faHome} className="w-4 mr-4" />
          Dashboard
        </li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faIdBadge} className="w-4 mr-4" />
          Profile
        </li>
      </ul>

      <hr className="my-5 border-1 border-slate-700" />

      <span className="text-sm text-slate-400 font-bold uppercase">Manage</span>

      <ul>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faUser} className="w-4 mr-4" />
          Users
        </li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faUserGroup} className="w-4 mr-4" />
          Members
        </li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faCalendarDays} className="w-4 mr-4" />
          Events
        </li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faClock} className="w-4 mr-4" />
          Participations
        </li>
      </ul>

      <hr className="my-5 border-1 border-slate-700" />

      <span className="text-sm text-slate-400 font-bold uppercase">
        Session
      </span>

      <ul>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faGear} className="w-4 mr-4" />
          Settings
        </li>
        <li className="px-4 py-4 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="w-4 mr-4"
          />
          Sign Out
        </li>
      </ul>
    </div>
  </aside>
);

export { Sidenav };
