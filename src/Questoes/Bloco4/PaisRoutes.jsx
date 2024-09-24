import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountriesDropdown from './CountriesDropdown';

const PaisRoutes = () => (
  <Router>
    <Routes>
      <Route path="/pais" element={<CountriesDropdown />} />
    </Routes>
  </Router>
);

export default PaisRoutes;