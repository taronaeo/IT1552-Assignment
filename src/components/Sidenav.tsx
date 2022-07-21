import React from 'react';
import { Link } from 'react-router-dom';
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

import { signOut } from '../services';

type SidenavProps = {
  className: string;
};

const Sidenav: React.FC<SidenavProps> = (props) => {
  return (
    <aside {...props}>
      <div className="flex flex-col gap-2 px-6 mt-8">
        <Link
          to="/"
          className="w-full flex flex-row items-center gap-4 p-3 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faHome} className="w-5" />
          Dashboard
        </Link>

        <Link
          to="/profile"
          className="w-full flex flex-row items-center gap-4 p-3 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faIdBadge} className="w-5" />
          Profile
        </Link>

        <hr className="my-2 border-1-border-slate-700" />
        <span className="text-xs text-slate-400 font-bold uppercase">
          Manage
        </span>

        <Link
          to="/manage/users"
          className="w-full flex flex-row items-center gap-4 p-3 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faUser} className="w-5" />
          Users
        </Link>

        <Link
          to="/manage/members"
          className="w-full flex flex-row items-center gap-4 p-3 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faUserGroup} className="w-5" />
          Members
        </Link>

        <Link
          to="/manage/events"
          className="w-full flex flex-row items-center gap-4 p-3 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faCalendarDays} className="w-5" />
          Events
        </Link>

        <Link
          to="/manage/participation"
          className="w-full flex flex-row items-center gap-4 p-3 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faClock} className="w-5" />
          Participation
        </Link>

        <hr className="my-2 border-1-border-slate-700" />
        <span className="text-xs text-slate-400 font-bold uppercase">
          Session
        </span>

        <Link
          to="/settings"
          className="w-full flex flex-row items-center gap-4 p-3 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faGear} className="w-5" />
          Settings
        </Link>

        <button
          onClick={signOut}
          className="w-full flex flex-row items-center gap-4 p-3 hover:rounded-lg hover:bg-sky-600/25">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export { Sidenav };
