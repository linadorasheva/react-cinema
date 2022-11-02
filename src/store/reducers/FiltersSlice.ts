import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters } from '../../types/request';

const initialState: IFilters = {
  year: `1960-2022`,
  rating: '1-10',
  sortByRelease: '-1',
  genre: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setYear: (state: IFilters, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    setRating: (state: IFilters, action: PayloadAction<string>) => {
      state.rating = action.payload;
    },
    setSortByRelease: (state: IFilters, action: PayloadAction<string>) => {
      state.sortByRelease = action.payload;
    },
    setGenre: (state: IFilters, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
});

export const { setYear, setRating, setSortByRelease, setGenre } =
  filtersSlice.actions;

export default filtersSlice.reducer;
