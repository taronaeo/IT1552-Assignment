import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { onAuth } from './services';
import { useAuthState } from './stores/auth';

import { Layout } from './layout';
import { AuthGuard } from './guards/AuthGuard';
import {
  Dashboard,
  ManageUsers,
  ManageMembers,
  ManageEvents,
  ManageParticipations,
} from './pages';

const Router: React.FC = () => {
  const setAuthState = useAuthState((state) => state.setUser);
  const resetAuthState = useAuthState((state) => state.reset);

  useEffect(() => {
    const unsubscribe = onAuth((user) => {
      if (!user) return resetAuthState();
      return setAuthState(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AuthGuard Page={Dashboard} />} />
          <Route path="/manage/users" element={<ManageUsers />} />
          <Route path="/manage/members" element={<ManageMembers />} />
          <Route path="/manage/events" element={<ManageEvents />} />
          <Route
            path="/manage/participations"
            element={<ManageParticipations />}
          />

          <Route path="/manage/users/:id" element={null} />
          <Route path="/manage/users/:id/edit" element={null} />
          <Route path="/manage/members/:id" element={null} />
          <Route path="/manage/members/:id/edit" element={null} />
          <Route path="/manage/events/:id" element={null} />
          <Route path="/manage/events/:id/edit" element={null} />
          <Route path="/manage/participations/:id" element={null} />
          <Route path="/manage/participations/:id/edit" element={null} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { Router };
