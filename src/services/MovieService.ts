import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  API_KEY,
  API_URL,
  TYPE_NUMBER_CARTOONS,
  TYPE_NUMBER_FILMS,
  TYPE_NUMBER_SERIALS,
} from '../constants';
import { IMovieEntity } from '../types/movie';
import { IBaseQuery, IQuery } from '../types/request';
import {
  ICartoonResponse,
  IImageResponse,
  IMoviesListResponse,
  ISerialResponse,
} from '../types/response';
import { getCurrentYear } from '../utils/common';

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getMovies: build.query<IMoviesListResponse, IQuery>({
      query: ({ filters, page, limit }) =>
        `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=${limit}&page=${page}&token=${API_KEY}`,
    }),
    getNewFilms: build.query<IMoviesListResponse, number>({
      query: (limit = 10) =>
        `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=${TYPE_NUMBER_FILMS}&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
    }),
    getNewSeries: build.query<ISerialResponse, number>({
      query: (limit = 10) =>
        `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=${TYPE_NUMBER_SERIALS}&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
    }),
    getNewCartoons: build.query<ICartoonResponse, number>({
      query: (limit = 10) =>
        `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=${TYPE_NUMBER_CARTOONS}&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
    }),
    getFilmById: build.query<IMovieEntity, string | string[] | undefined>({
      query: (id) => `/movie?search=${id}&field=id&token=${API_KEY}`,
    }),
    getMovieImages: build.query<IImageResponse, IBaseQuery>({
      query: ({ id, limit }) =>
        `/image?search=${id}&field=movieId&limit=${limit}&token=${API_KEY}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetFilmByIdQuery,
  useGetNewFilmsQuery,
  useGetNewSeriesQuery,
  useGetNewCartoonsQuery,
  useGetMovieImagesQuery,
} = movieAPI;
