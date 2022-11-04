import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_KEY, API_URL } from '../constants';
import { IQuery } from '../types/request';
import { IMoviesListResponse } from '../types/response';

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getMovies: build.query<IMoviesListResponse, IQuery>({
      query: ({ filters, page, limit }) =>
        `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=${limit}&page=${page}&token=${API_KEY}`,
    }),
  }),
});

export const { useGetMoviesQuery } = movieAPI;
