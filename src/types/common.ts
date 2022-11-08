export interface IFact {
  name?: string;
  value: string;
  type?: string;
  spoiler?: boolean;
}

export interface ITabBar {
  id: number;
  name: string;
  routeName: string;
}

export const enum RoutesNameEnum {
  MAIN = '/',
  FILM = 'films/:id',
  FILM_IMAGES = 'images',
  FILM_FACTS = 'facts',
  FILMS = 'films',
  SERIALS = 'serials',
  CARTOONS = 'cartoons',
}

export const enum TabsNameEnum {
  OVERVIEW = 'Обзор',
  FACTS = 'Факты',
  IMAGES = 'Изображения',
}
