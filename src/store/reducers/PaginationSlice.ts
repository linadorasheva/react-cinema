import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBaseQuery } from '../../types/request';

const initialState: IBaseQuery = {
  page: 1,
  limit: 10,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state: IBaseQuery, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state: IBaseQuery, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const { setPage, setLimit } = paginationSlice.actions;

export default paginationSlice.reducer;
