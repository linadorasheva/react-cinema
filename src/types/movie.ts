import { IFact } from './common';

interface IMovieEntityPoster {
  _id?: string;
  url: string;
  previewUrl: string;
}
interface IMovieEntityLogo {
  _id?: string;
  url: string | null;
}

interface IMovieEntityBackdrop {
  _id?: string;
  url: string;
  previewUrl: string;
}

interface IMovieEntityRating {
  _id?: string;
  tmdb?: number;
  kp?: number;
  imdb?: number;
  filmCritics?: number;
  russianFilmCritics?: number;
  await?: number;
}

interface IMovieEntityVotes {
  _id?: string;
  tmdb?: number;
  kp?: number;
  imdb?: number;
  filmCritics?: number;
  russianFilmCritics?: number;
  await?: number;
}

interface IMovieEntityTrailer {
  _id?: string;
  url: string;
  name: string;
  site: string;
  size?: number;
  type?: string;
}

interface IMovieEntityVideos {
  _id?: string;
  trailers: IMovieEntityTrailer[];
  teasers: IMovieEntityTrailer[];
}

interface IMovieEntityBudget {
  _id?: string;
  value: number;
  currency: string;
}

interface IFee {
  _id?: string;
  value: number;
  currency: string;
}

interface IMovieEntityFees {
  _id?: string;
  usa?: IFee;
  russia?: IFee;
  world?: IFee;
}

interface IMovieEntityDistributors {
  distributor: string;
  distributorRelease: string | null;
}

interface IMovieEntityPremiere {
  _id?: string;
  country?: string;
  world?: string;
  russia?: string;
  bluray?: string;
  dvd?: string;
  cinema?: string;
}

interface IMovieEntityImages {
  postersCount?: number;
  backdropsCount?: number;
  framesCount?: number;
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
  name?: string;
  enName?: string;
  photo?: string;
  description?: string;
  enProfession?:
    | 'director'
    | 'actor'
    | 'design'
    | 'producer'
    | 'composer'
    | 'editor';
}

interface IMovieEntityExternalId {
  _id?: string;
  tmdb?: number | null;
  imdb?: string | null;
  kpHD?: string | null;
}

interface IMovieEntityGenre {
  name: string;
}

interface IMovieEntityCountry {
  name: string;
}

interface IMovieEntityNames {
  _id?: string;
  name: string | null;
}
interface IEpisode {
  _id?: string;
  number: number;
  name: string | null;
  enName: string;
  date: Date | string;
  description: string | null;
}
export interface ISerialEntity {
  movieId: number;
  number: number;
  episodesCount: number;
  episodes: IEpisode[];
}

export interface IMoviePoster {
  _id?: string;
  previewUrl: string;
  url: string;
}
export interface IMovieRating {
  _id?: string;
  await: number;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
}

interface IMovieEntitySeasonsInfo {
  number: number;
  episodesCount: number;
}

interface IMovieEntityTechnology {
  _id?: string;
  has3D: boolean;
  hasImax: boolean;
}

export interface IMovieEntitySequels {
  _id?: string;
  alternativeName?: string;
  name?: string;
  enName?: string;
  id: number;
  poster: IMoviePoster;
  type: string;
}

export interface ISimilarMovie {
  _id?: string;
  alternativeName: string;
  enName: string;
  id: number;
  name: string;
  poster: IMoviePoster;
}
interface IWatchabilityItem {
  _id: string;
  name: string;
  url: string;
  logo: {
    _id: string;
    url: string;
  };
}
interface IMovieEntityWatchability {
  _id?: string;
  items: IWatchabilityItem[];
}
interface IMovieEntityImagesInfo {
  _id?: string;
  framesCount: number;
}

export interface IMovieEntity {
  externalId: IMovieEntityExternalId;
  ageRating?: number;
  alternativeName?: string | null;
  backdrop?: IMovieEntityBackdrop;
  budget?: IMovieEntityBudget;
  collections?: [];
  countries?: IMovieEntityCountry[];
  createDate?: Date | string;
  description?: string;
  distributors?: IMovieEntityDistributors;
  fees?: IMovieEntityFees;
  facts?: IFact[];
  genres?: IMovieEntityGenre[];
  id: number;
  enName?: string | null;
  images?: IMovieEntityImages;
  imagesInfo?: IMovieEntityImagesInfo;
  lists?: [];
  logo?: IMovieEntityLogo;
  movieLength?: number | null;
  name?: string;
  names?: IMovieEntityNames[];
  persons?: IMovieEntityPerson[];
  poster?: IMovieEntityPoster;
  premiere?: IMovieEntityPremiere;
  productionCompanies?: IMovieEntityProductionCompanies[];
  rating?: IMovieEntityRating;
  ratingMpaa?: string;
  releaseYears?: [];
  seasonsInfo?: IMovieEntitySeasonsInfo[];
  sequelsAndPrequels?: IMovieEntitySequels[];
  shortDescription?: string | null;
  similarMovies?: ISimilarMovie[];
  slogan?: string;
  spokenLanguages?: IMovieEntityLang[];
  status?: string;
  technology?: IMovieEntityTechnology;
  ticketsOnSale?: boolean;
  top10?: null | boolean | string;
  top250?: null | boolean | string;
  type?: string;
  typeNumber?: number;
  updateDates?: Date[] | string[];
  updatedAt?: Date | string;
  videos?: IMovieEntityVideos;
  votes?: IMovieEntityVotes;
  watchability?: IMovieEntityWatchability;
  year?: number;
}

export interface IMovieListEntity extends Partial<IMovieEntity> {}
