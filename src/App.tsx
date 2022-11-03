import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import FilmPage from './pages/FilmPage/FilmPage';
import ListingPage from './pages/ListingPage/ListingPage';
import './styles/App.scss';
import SerialsPage from './pages/SerialsPage/SerialsPage';
import CartoonsPage from './pages/CartoonsPage/CartoonsPage';
import MainPage from './pages/MainPage/MainPage';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/film" element={<FilmPage />} />
        <Route path="/films" element={<ListingPage />} />
        <Route path="/serials" element={<SerialsPage />} />
        <Route path="/cartoons" element={<CartoonsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
