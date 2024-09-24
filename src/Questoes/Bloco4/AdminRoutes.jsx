import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminCheckbox from './AdminCheckbox';

const AdminRoutes = () => (
  <Router>
    <Routes>
      <Route path="/admin-ligado" element={<AdminCheckbox />} />
      <Route path="/admin-desligado" element={<AdminCheckbox />} />
    </Routes>
  </Router>
);

export default AdminRoutes;