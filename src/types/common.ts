export interface IFact {
  name?: string;
  value?: string;
  type?: string;
  spoiler?: boolean;
}

export const enum RoutesNameEnum {
  MAIN = '/',
  FILM = 'film/:id',
  FILMS = 'films',
  SERIALS = 'serials',
  CARTOONS = 'cartoons',
}
