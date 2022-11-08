import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from '../../types/loadSlice';

const initialState: IInitialState = {
  filmsLimit: 10,
  seriesLimit: 10,
  imagesLimit: 9,
  cartoonsLimit: 10,
};

export const loadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    loadMoreFilms: (state: IInitialState, action: PayloadAction<number>) => {
      state.filmsLimit += action.payload;
    },
    loadMoreSeries: (state: IInitialState, action: PayloadAction<number>) => {
      state.seriesLimit += action.payload;
    },
    loadMoreImages: (state: IInitialState, action: PayloadAction<number>) => {
      state.imagesLimit += action.payload;
    },
  },
});

export const { loadMoreFilms, loadMoreSeries, loadMoreImages } =
  loadSlice.actions;

export default loadSlice.reducer;
