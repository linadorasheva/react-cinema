import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FilmPage from './pages/FilmPage/FilmPage';
import ListingPage from './pages/ListingPage/ListingPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListingPage />} />
      <Route path="/film" element={<FilmPage />} />
    </Routes>
  );
};

export default App;
