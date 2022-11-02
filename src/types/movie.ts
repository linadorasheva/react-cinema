import { IFact } from './common';

interface IMovieEntityPoster {
  url: string;
  previewUrl: string;
}

interface IMovieEntityBackdrop {
  url: string;
  previewUrl: string;
}

interface IMovieEntityRating {
  tmdb?: number;
  kp?: number;
  imdb?: number;
}

interface IMovieEntityVotes {
  tmdb?: number;
  kp?: number;
  imdb?: number;
}

interface IMovieEntityTrailer {
  _id: string;
  url: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

interface IMovieEntityBudget {
  value: number;
  currency: string;
}

interface IFee {
  value: number;
  currency: string;
}

interface IMovieEntityFees {
  usa: IFee;
  russia: IFee;
  world: IFee;
}

interface IMovieEntityDistributors {
  distributor: string;
  distributorRelease: string | null;
}

interface IMovieEntityPremiere {
  country: string;
  world: Date;
  russia: Date;
  bluray: Date;
  dvd: Date;
}

interface IMovieEntityImages {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

interface IMovieEntityProductionCompanies {
  name: string;
  url: string;
  previewUrl: string;
}

interface IMovieEntityLang {
  name: string;
  nameEn: string;
}

interface IMovieEntityPerson {
  id: number;
  name: string;
  enName: string;
  photo: string;
  enProfession: string;
}

interface IMovieEntityExternalId {
  tmdb: number;
  imdb?: string;
}

interface IMovieEntityGenre {
  name: string;
}

interface IMovieEntityCountry {
  name: string;
}

interface IEpisode {
  _id?: string;
  number: number;
  name: string | null;
  enName: string;
  date: Date;
  description: string | null;
}

export interface IMovieEntity {
  id: number;
  externalId: IMovieEntityExternalId;
  type: string;
  name: string;
  alternativeName: string;
  description: string;
  slogan: string;
  year: number;
  poster: IMovieEntityPoster;
  backdrop: IMovieEntityBackdrop;
  rating: IMovieEntityRating;
  votes: IMovieEntityVotes;
  videos: {
    trailers: IMovieEntityTrailer[];
  };
  budget: IMovieEntityBudget;
  fees: IMovieEntityFees;
  distributors: IMovieEntityDistributors;
  premiere: IMovieEntityPremiere;
  images: IMovieEntityImages;
  status: string;
  movieLength: number;
  productionCompanies: IMovieEntityProductionCompanies[];
  spokenLanguages: IMovieEntityLang[];
  facts: IFact[];
  genres: IMovieEntityGenre[];
  countries: IMovieEntityCountry[];
  seasonsInfo: [];
  persons: IMovieEntityPerson[];
  lists: [];
}

export interface IMovieListEntity {
  externalId: IMovieEntityExternalId;
  poster: IMovieEntityPoster;
  rating: IMovieEntityRating;
  votes: IMovieEntityVotes;
  id: number;
  type: string;
  name: string;
  year: number;
}

export interface ISerialEntity {
  movieId: number;
  number: number;
  episodesCount: number;
  episodes: IEpisode[];
}
