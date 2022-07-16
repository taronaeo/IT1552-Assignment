import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/manage/users" element={null} />
      <Route path="/manage/members" element={null} />
      <Route path="/manage/events" element={null} />
      <Route path="/manage/participations" element={null} />

      <Route path="/manage/users/:id" element={null} />
      <Route path="/manage/users/:id/edit" element={null} />
      <Route path="/manage/members/:id" element={null} />
      <Route path="/manage/members/:id/edit" element={null} />
      <Route path="/manage/events/:id" element={null} />
      <Route path="/manage/events/:id/edit" element={null} />
      <Route path="/manage/participations/:id" element={null} />
      <Route path="/manage/participations/:id/edit" element={null} />
    </Routes>
  </BrowserRouter>
);

export { Router };
