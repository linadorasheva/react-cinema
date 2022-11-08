import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import Section from '../../components/Section/Section';
import { useTypedSelector } from '../../hooks/redux';
import {
  useGetNewCartoonsQuery,
  useGetNewFilmsQuery,
  useGetNewSeriesQuery,
} from '../../services/MovieService';
import { RoutesNameEnum } from '../../types/common';

import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';

const MainPage = () => {
  const { seriesLimit, filmsLimit, cartoonsLimit } = useTypedSelector(
    (state) => state.loadReducer
  );
  const { data: newFilms, isFetching: isNewFilmsLoading } =
    useGetNewFilmsQuery(filmsLimit);

  const { data: newSerials, isFetching: isNewSerialsLoading } =
    useGetNewSeriesQuery(seriesLimit);

  const { data: newCartoons, isFetching: isNewCartoonsLoading } =
    useGetNewCartoonsQuery(cartoonsLimit);

  const navigationFilms = {
    prevEl: '.main-page-slider-films__slider-btn--prev',
    nextEl: '.main-page-slider-films__slider-btn--next',
  };

  const navigationSerials = {
    prevEl: '.main-page-slider-serials__slider-btn--prev',
    nextEl: '.main-page-slider-serials__slider-btn--next',
  };

  const navigationCartoons = {
    prevEl: '.main-page-slider-cartoons__slider-btn--prev',
    nextEl: '.main-page-slider-cartoons__slider-btn--next',
  };

  return (
    <div className="main-page page">
      <div className="container">
        <Section
          title="Фильмы"
          linkName="Смотреть все"
          url={RoutesNameEnum.FILMS}
        >
          <div className="main-page-slider-films">
            <button className="main-page-slider-films__slider-btn main-page-slider-films__slider-btn--prev">
              <svg>
                <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
              </svg>
            </button>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={5}
              navigation={navigationFilms}
            >
              {newFilms?.docs.map((card) => (
                <SwiperSlide key={card.id}>
                  <MovieCard card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="main-page-slider-films__slider-btn main-page-slider-films__slider-btn--next">
              <svg>
                <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
              </svg>
            </button>
          </div>
        </Section>
        <Section
          title="Сериалы"
          linkName="Смотреть все"
          url={RoutesNameEnum.SERIALS}
        >
          <div className="main-page-slider-serials">
            <button className="main-page-slider-serials__slider-btn main-page-slider-serials__slider-btn--prev">
              <svg>
                <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
              </svg>
            </button>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={5}
              navigation={navigationSerials}
            >
              {newSerials?.docs.map((card) => (
                <SwiperSlide key={card.id}>
                  <MovieCard card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="main-page-slider-serials__slider-btn main-page-slider-serials__slider-btn--next">
              <svg>
                <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
              </svg>
            </button>
          </div>
        </Section>
        <Section
          title="Мультфильмы"
          linkName="Смотреть все"
          url={RoutesNameEnum.CARTOONS}
        >
          <div className="main-page-slider-cartoons">
            <button className="main-page-slider-cartoons__slider-btn main-page-slider-cartoons__slider-btn--prev">
              <svg>
                <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
              </svg>
            </button>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={5}
              navigation={navigationCartoons}
            >
              {newCartoons?.docs.map((card) => (
                <SwiperSlide key={card.id}>
                  <MovieCard card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="main-page-slider-cartoons__slider-btn main-page-slider-cartoons__slider-btn--next">
              <svg>
                <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
              </svg>
            </button>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default MainPage;
