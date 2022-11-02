import { IFact } from './common';

interface IPersonMovie {
  id: number;
  name: string;
  alternativeName: string;
  rating: number;
  general: boolean;
  description: string;
}

interface IPersonProfession {
  value: string;
}

interface IPersonBirthOrDeathPlace {
  value: string;
}

interface IPersonSpouse {
  children: number;
  divorced: boolean;
  divorcedReason: string;
  id: number;
  name: string;
  relation: string;
}

export interface IPersonEntity {
  spouses: IPersonSpouse | null;
  id: number;
  name: string;
  enName: string;
  photo: string;
  profession: IPersonProfession[];
  birthPlace: IPersonBirthOrDeathPlace[];
  deathPlace: IPersonBirthOrDeathPlace[] | null;
  facts: IFact[];
  movies: IPersonMovie[];
  age: number;
  birthday: Date;
  countAwards: number;
  death: Date | null;
  growth: number;
  sex: string;
}

export interface IPersonListEntity {
  id: number;
  name: string;
  enName: string;
  photo: string;
  age: number;
  sex: string;
}
