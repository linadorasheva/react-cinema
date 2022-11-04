export interface IFact {
  name: string;
}

export const enum RoutesNameEnum {
  MAIN = '/',
  FILM = 'film/:id',
  FILMS = 'films',
  SERIALS = 'serials',
  CARTOONS = 'cartoons',
}
