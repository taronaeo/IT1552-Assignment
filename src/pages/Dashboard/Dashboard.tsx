import React from 'react';
import {
  faUser,
  faUsers,
  faCalendarDays,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

import { Title, Heading, WidgetCard } from '../../components';
import { RecentEvents, UpcomingEvents } from '.';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* <div className="w-full max-w-7xl flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="flex gap-4 items-center text-4xl font-medium">
            <img
              src={user?.photoURL as string}
              className="w-16 h-16 border-2 border-white/50 rounded-full"
              alt="Profile Picture"
            />

            {user?.displayName}
          </h1>

          <button
            className="px-6 py-2 border-2 rounded-full hover:bg-sky-600/25"
            onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div> */}
      <Title>Dashboard</Title>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <WidgetCard icon={faUser}>
          <span>100</span>
          <div className="font-bold">users</div>
        </WidgetCard>

        <WidgetCard icon={faUsers}>
          <span>100</span>
          <div className="font-bold">members</div>
        </WidgetCard>

        <WidgetCard icon={faCalendarDays}>
          <span>100</span>
          <div className="font-bold">events</div>
        </WidgetCard>

        <WidgetCard icon={faClock}>
          <span>100</span>
          <div className="font-bold">participations</div>
        </WidgetCard>
      </div>
      <Heading>Your Statistics</Heading>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <WidgetCard icon={faCalendarDays}>
          <div className="font-bold uppercase">Events Completed</div>
          <div>5 events</div>
        </WidgetCard>

        <WidgetCard icon={faClock}>
          <div className="font-bold uppercase">Hours Completed</div>
          <div>25.5 hours</div>
        </WidgetCard>
      </div>
      <Heading>Upcoming Events</Heading>
      <div className="mb-4">
        <UpcomingEvents />
      </div>
      <Heading>Recent Events</Heading>
      <div className="mb-4">
        <RecentEvents />
      </div>
      &copy; Copyright 2022, Aaron Teo. All rights reserved.
    </div>
  );
};

export { Dashboard };
