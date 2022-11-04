import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import FilmPage from './pages/FilmPage/FilmPage';
import './styles/App.scss';
import SerialsPage from './pages/SerialsPage/SerialsPage';
import CartoonsPage from './pages/CartoonsPage/CartoonsPage';
import MainPage from './pages/MainPage/MainPage';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import { RoutesNameEnum } from './types/common';

const App: FC = () => {
  return (
    <Routes>
      <Route path={RoutesNameEnum.MAIN} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={RoutesNameEnum.FILM} element={<FilmPage />} />
        <Route path={RoutesNameEnum.FILMS} element={<FilmsPage />} />
        <Route path={RoutesNameEnum.SERIALS} element={<SerialsPage />} />
        <Route path={RoutesNameEnum.CARTOONS} element={<CartoonsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
