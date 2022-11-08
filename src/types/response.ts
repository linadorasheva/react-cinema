import { IImageEntity } from './image';
import { IMovieEntity } from './movie';
import { IPersonListEntity } from './person';
import { IReviewEntity } from './review';

interface IData {
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IMoviesListResponse extends IData {
  docs: IMovieEntity[];
}

export interface ISerialResponse extends IData {
  docs: IMovieEntity[];
}
export interface ICartoonResponse extends IData {
  docs: IMovieEntity[];
}

export interface IPersonsListResponse extends IData {
  docs: IPersonListEntity[];
}

export interface IReviewResponse extends IData {
  docs: IReviewEntity[];
}

export interface IImageResponse extends IData {
  docs: IImageEntity[];
}
