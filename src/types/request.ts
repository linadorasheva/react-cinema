export interface IFilters {
  rating: string;
  year: string;
  genre: string;
  sortByRelease?: string;
}

export interface IBaseQuery {
  type?: string;
  query?: string;
  limit?: number;
  page?: number;
  id?: string | string[] | undefined;
}

export interface IQuery extends IBaseQuery {
  filters: IFilters;
}
