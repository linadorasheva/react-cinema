import React, { FC, useEffect, useState } from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';
import TabBar from '../../components/TabBar/TabBar';
import { IFact, ITabBar, TabsNameEnum } from '../../types/common';
import { IMovieEntity, ISimilarMovie } from '../../types/movie';
import { convertNumbers, formatDate } from '../../utils/common';
import { getMovieDuration } from '../../utils/movieUtils';

const mock: IMovieEntity = {
  externalId: {
    _id: '6359aea09f6a011dbf63123f',
    imdb: 'tt0372784',
    kpHD: '46ddefd7578320f6ac89d5c0b98ee732',
  },
  logo: {
    _id: '62f7d7b1252c8469ef124001',
    url: 'https://avatars.mds.yandex.net/get-ott/223007/2a00000172284ff4c9e90a56d3b24b563f1e/orig',
  },
  poster: {
    _id: '6339875fc22d011bb5ab07cb',
    url: 'https://st.kp.yandex.net/images/film_big/47237.jpg',
    previewUrl:
      'https://st.kp.yandex.net/images/film_iphone/iphone360_47237.jpg',
  },
  backdrop: {
    _id: '6339875fc22d011bb5ab07cc',
    url: 'https://avatars.mds.yandex.net/get-ott/374297/2a00000172285019a4e15353deb0d4116510/orig',
    previewUrl:
      'https://avatars.mds.yandex.net/get-ott/374297/2a00000172285019a4e15353deb0d4116510/orig',
  },
  rating: {
    _id: '634999d5a7faa4cbfcff157b',
    kp: 7.926,
    imdb: 8.2,
    filmCritics: 7.7,
    russianFilmCritics: 0,
    await: 0,
  },
  votes: {
    kp: 328547,
    imdb: 1461473,
    filmCritics: 287,
    russianFilmCritics: 1,
    await: 0,
    _id: '6367e29508cbd3f0376765f3',
  },
  videos: {
    _id: '632c19f56d074d4407b77ddf',
    trailers: [],
    teasers: [],
  },
  budget: {
    _id: '6339875fc22d011bb5ab0896',
    value: 150000000,
    currency: '$',
  },
  fees: {
    world: {
      _id: '6339875fc22d011bb5ab0898',
      value: 371853783,
      currency: '$',
    },
    russia: {
      _id: '6339875fc22d011bb5ab0899',
      value: 1350000,
      currency: '$',
    },
    usa: {
      _id: '6339875fc22d011bb5ab089a',
      value: 205343774,
      currency: '$',
    },
    _id: '6339875fc22d011bb5ab0897',
  },
  distributors: {
    distributor: 'Каро-Премьер',
    distributorRelease: 'Юниверсал Пикчерс Рус',
  },
  premiere: {
    _id: '62f4d5d6252c8469ef7598f7',
    country: 'Япония',
    world: '2005-05-31T00:00:00.000Z',
    russia: '2005-06-16T00:00:00.000Z',
    cinema: '2005-08-04T00:00:00.000Z',
    dvd: '2012-12-20T00:00:00.000Z',
    bluray: '2011-02-17T00:00:00.000Z',
  },
  images: {
    framesCount: 117,
  },
  watchability: {
    _id: '6339875fc22d011bb5ab089b',
    items: [
      {
        logo: {
          _id: '6339875fc22d011bb5ab089d',
          url: 'https//avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig',
        },
        _id: '6339875fc22d011bb5ab089c',
        name: 'Иви',
        url: 'https://www.ivi.ru/watch/64256?utm_source=yandex&utm_medium=wizard',
      },
      {
        logo: {
          _id: '6339875fc22d011bb5ab089f',
          url: 'https//avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig',
        },
        _id: '6339875fc22d011bb5ab089e',
        name: 'viju',
        url: 'https://viju.ru/filmy/betmen-nachalo?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex',
      },
    ],
  },
  collections: [],
  updateDates: ['2021-09-30T08:06:06.000Z'],
  status: 'Выпущен',
  movieLength: 140,
  productionCompanies: [
    {
      name: 'Warner Bros. Pictures',
      url: 'https://www.themoviedb.org/t/p/original/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png',
      previewUrl:
        'https://www.themoviedb.org/t/p/w500/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png',
    },
    {
      name: 'DC Comics',
      url: 'https://www.themoviedb.org/t/p/original/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
      previewUrl:
        'https://www.themoviedb.org/t/p/w500/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
    },
    {
      name: 'DC Entertainment',
      url: 'https://www.themoviedb.org/t/p/original/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
      previewUrl:
        'https://www.themoviedb.org/t/p/w500/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
    },
    {
      name: 'Syncopy',
      url: 'https://www.themoviedb.org/t/p/original/3tvBqYsBhxWeHlu62SIJ1el93O7.png',
      previewUrl:
        'https://www.themoviedb.org/t/p/w500/3tvBqYsBhxWeHlu62SIJ1el93O7.png',
    },
  ],
  spokenLanguages: [
    {
      name: 'English',
      nameEn: 'English',
    },
    {
      name: 'اردو',
      nameEn: 'Urdu',
    },
    {
      name: '普通话',
      nameEn: 'Mandarin',
    },
  ],
  id: 47237,
  type: 'movie',
  name: 'Бэтмен: Начало',
  description:
    'В детстве юный наследник огромного состояния Брюс Уэйн оказался свидетелем убийства своих родителей, и тогда он решил бороться с преступностью. Спустя годы он отправляется в путешествие по миру, чтобы найти способ восстановить справедливость. Обучение у мудрого наставника боевым искусствам дает ему силу и смелость. Вернувшись в родной город, Уэйн становится Бэтменом и ведет борьбу со злом.',
  slogan: 'Легенда начинается...',
  year: 2005,
  facts: [
    {
      value:
        'До того момента, как на роль «человека-летучей мыши» был избран <a href="/name/21495/" class="all">Кристиан Бэйл</a> эту вакансию прочили многим известным актерам. Среди кандидатов были следующие имена: <a href="/name/7165/" class="all">Гай Пирс</a>, <a href="/name/10633/" class="all">Эштон Кутчер</a>, <a href="/name/53473/" class="all">Дэвид Бореаназ</a>, <a href="/name/20865/" class="all">Джон Кьюсак</a>, <a href="/name/41104/" class="all">Дэвид Духовны</a> и многие другие.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Как и в случае с актерами, место на режиссерском мостике также могли занять многие достойные фигуры. Несмотря на провал четвертого фильма сериала, это место был не прочь занять <a href="/name/6615/" class="all">Джоэл Шумахер</a>. Впрочем, после некоторых раздумий известный режиссер решил больше не рисковать своей репутацией.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Продюсеры приглашали <a href="/name/2944/" class="all">Дэвида Финчера</a>, однако тот сразу же ответил отказом, мотивируя его тем, что на эту тему уже сняли все что можно, и ему просто неинтересно работать со второсортным материалом.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'В 2002 году всерьез рассматривалась кандидатура самого <a href="/name/22948/" class="all">Клинта Иствуда</a>, а чуть позже появилась идея создания картины «<a href="/film/770631/" class="all">Бэтмен против Супермена</a>» (2016), в которой вакансия режиссера на тот момент отдавалась <a href="/name/24027/" class="all">Вольфгангу Петерсену</a>. Петерсен предпочел снимать исторический эпос «<a href="/film/3442/" class="all">Троя</a>» (2004). И все-таки в 2003 году вакансия была занята <a href="/name/41477/" class="all">Кристофером Ноланом</a>.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Были попытки привлечь <a href="/name/6963/" class="all">Даррена Аронофски</a> к работе над картиной, основанной на комиксе под названием «Бэтмен: Год первый». Решение продюсеров Warner Bros. не вкладывать денежные средства в проект, так и не было мотивировано, однако существует версия, что киномужам, попросту говоря, не понравился сценарий. В нем Альфред фигурировал как чернокожий механик по кличке «Большой Эл», Бэтмобиль быль стилизован под Линкольн, а сам Брюс Уэйн был и вовсе бездомным.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Принять участие в кастинге на роль Бэтмена были приглашены всего 8 актеров: <a href="/name/21495/" class="all">Кристиан Бэйл</a>, <a href="/name/3421/" class="all">Джошуа Джексон</a>, <a href="/name/7241/" class="all">Эйон Бэйли</a>, <a href="/name/47427/" class="all">Хью Дэнси</a>, <a href="/name/2668/" class="all">Билли Крудап</a>, <a href="/name/5005/" class="all">Киллиан Мёрфи</a>, <a href="/name/34227/" class="all">Генри Кавилл</a> и <a href="/name/22692/" class="all">Джейк Джилленхол</a>. Роль досталась Бейлу, однако <a href="/name/41477/" class="all">Крису Нолану</a> так понравилась игра Киллиана Мёрфи, что он позвал последнего сыграть роль Джонатана Крейна, также известного под псевдонимом Пугало. Кстати, на эту роль отчаянно претендовал <a href="/name/20148/" class="all">Кристофер Экклстон</a>.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Роль Джеймса Гордона с равным успехом могли сыграть <a href="/name/37652/" class="all">Курт Рассел</a> и <a href="/name/26241/" class="all">Деннис Куэйд</a>.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Что касается названия картины, то с ним тоже произошли невероятные пертурбации. Сначала это был просто «Бэтмен 5», чуть позднее «Бэтмен: Устрашение», далее «Бэтмен: Игра на запугивание», и наконец, получил-таки свое официальное название — «Бэтмен: Начало».',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'На роль Альфреда <a href="/name/41477/" class="all">Крис Нолан</a> пытался позвать самого <a href="/name/8968/" class="all">Энтони Хопкинса</a>, но получил отказ. Ранее Хопкинс пробовался на роль Мистера Фриза в фильме &#171;<a href="/film/3678/" class="all">Бэтмен и Робин</a>&#187; (1997).',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Люсиуса Фокса мог сыграть <a href="/name/9838/" class="all">Лоуренс Фишбёрн</a>.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Началу съемок пытались попрепятствовать резвившиеся голуби, так некстати расшумевшиеся над крышей съемочного павильона в Лондоне.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Съемки кинокартины начались 22 мая 2004 года в Сенате (здании, принадлежащем Лондонскому Университету). Передняя часть сооружения была стилизована под здание городского суда города Готэма.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Обширная часть декораций, олицетворяющих собой антураж города Готэма, была возведена в одном из заброшенных ангаров.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'На съемочной площадке к <a href="/name/21495/" class="all">Кристиану Бэйлу</a> были прикреплены два человека, помогавших надевать ему громоздкий костюм Бэтмена.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Сценарист <a href="/name/8013/" class="all">Дэвид С. Гойер</a> одновременно с работой над сюжетом Бэтмена работал и над третьей частью Блэйда. Кстати, сам Дэвид очень хотел, чтобы Бэтменом стал <a href="/name/22692/" class="all">Джейк Джилленхол</a>, однако уже в ходе работы над картиной признал, что выбор <a href="/name/21495/" class="all">Кристиана Бэйла</a> был также весьма удачен.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'На сей раз транспорт главного героя – Бэтмобиль — не был основан на существующих моделях автомобилей. Он создавался практически с нуля. По словам создателей, данный шедевр инженерной мысли способен развить скорость до 90 км/ч всего за 6 секунд.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Во время урбанистических съемок на улицах Чикаго, одна из машин влетела в Бэтмобиль. Водитель был в стельку пьян, и смог лишь развести руками: «Мне показалось, что Черный Рыцарь спустился с небес на своем транспортном средстве, а может это и, вовсе, были инопланетяне».',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Дорожная полиция Чикаго в дни съемок испытала немало беспокойных минут, т.к. автомобиль привлекал внимание многочисленных зевак, в результате чего автомобильные пробки возникали всюду, где появлялась съемочная бригада.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Во время съемок на двери трейлера, в котором обитал <a href="/name/21495/" class="all">Кристиан Бэйл</a>, не было имени и фамилии актера, зато на двери красовалась вывеска «Брюс Уэйн».',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        '<a href="/name/9943/" class="all">Кэти Холмс</a> в борьбе за роль Рейчел Дэвис сумела опередить таких маститых конкуренток как <a href="/name/24285/" class="all">Натали Портман</a>, <a href="/name/22150/" class="all">Сара Мишель Геллар</a> и <a href="/name/28630/" class="all">Эми Адамс</a>',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'В роли офицера полиции Готэм-Сити снялся питчер бейсбольной команды NY Mets <a href="/name/1126782/" class="all">Дуайт Гуден</a>.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Пятой частью приключений Брюса Уэйна могли заняться <a href="/name/23330/" class="all">Лана</a> и <a href="/name/23329/" class="all">Лилли</a> Вачовски, но предпочли работу над сиквелами к &#171;Матрице&#187;.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        '<a href="/name/21495/" class="all">Кристиан Бэйл</a> первый актер неамериканского происхождения (по национальности — валлиец), исполнивший главного героя в экранизации саги про Бэтмена.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Бэтмен впервые появился в 27-м выпуске «Detective Comics» в мае 1939 года.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Саундтрек фильма содержит несколько пасхальных яиц от создателей — все треки именуются различными латинскими названиями видов летучих мышей, а первые буквы названий треков с 4 по 9 составляют слово BATMAN.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Фальшивое название фильма на стадии съёмок — The Intimidation Game.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'На роль Кармайна Фальконе рассматривались <a href="/name/3714/" class="all">Боб Хоскинс</a> и <a href="/name/48857/" class="all">Джеймс Гандольфини</a>.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Джонатан Крейн под влиянием своего собственного галлюциногена страха видит Бэтмена, как летучую мышь, которая похожа на Мэн-Бэта.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'За 10 лет до выхода этого фильма <a href="/name/21495/" class="all">Кристиан Бэйл</a> пробовался на роль Робина в фильме &#171;<a href="/film/1809/" class="all">Бэтмен навсегда</a>&#187; (1995).',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        '<a href="/name/41477/" class="all">Кристофер Нолан</a> и <a href="/name/8013/" class="all">Дэвид С. Гойер</a> хотели чтобы в фильме был Харви Дент, прокурор Готэма, однако вскоре решили, что не смогут полностью раскрыть персонажа. И Харви Дент был отложен для фильма &#171;<a href="/film/111543/" class="all">Темный рыцарь</a>&#187; (2008).',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        '<a href="/name/21495/" class="all">Кристиан Бэйл</a> заявил, что откажется исполнять роль Бэтмена, если в каком-либо из трех фильмов c его участием введут Робина.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        '<a href="/name/1183/" class="all">Хит Леджер</a> был в числе претендентов на роль Бэтмена на ранних стадиях разработки фильма. Вскоре актер сыграл Джокера в фильме <a href="/film/111543/" class="all">&#171;Темный рыцарь&#187;</a> (2008).',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'На роль Бэтмена рассматривалось немало актеров, в том числе и <a href="/name/21495/" class="all">Кристиан Бэйл</a>, и все они были на прослушивании в костюме <a href="/name/8516/" class="all">Вэла Килмера</a> из фильма &#171;<a href="/film/1809/" class="all">Бэтмен навсегда</a>&#187; (1995).',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Рэйчел Дауэс была персонажем, созданным для «Бэтмена: Начало». Такое решение сбило с толку фанатов, когда у <a href="/name/41477/" class="all">Кристофера Нолана</a> был большой выбор любовного интереса для Брюса Уэйна, который можно было выбрать из комиксов. Создание Рэйчел не подразумевало стать чем-то выдающимся, чтобы режиссер оставил свой след в мире Бэтмена. Это произошло из-за Двуликого.\nНолан и <a href="/name/8013/" class="all">Дэвид С. Гойер</a> хотели ввести Харви Дента в первом фильме, но решили, что они не смогут полностью раскрыть персонажа. В результате вместо него была создана Рэйчел.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'В фильме можно заметить камэо <a href="/name/21488/" class="all">Ларри Дж. Франко</a>, являвшегося продюсером фильма &laquo;<a href="/film/898/" class="all">Бэтмен возвращается</a>&raquo;.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'На роль главного злодея по имени Рас Аль Гул пробовался <a href="/name/10779/" class="all">Вигго Мортенсен</a>.',
      type: 'FACT',
      spoiler: true,
    },
    {
      value:
        'Смерть родителей Брюса Уэйна показана именно так, как и в оригинальном комиксе. В 1989 году сценаристам пришлось выдумать смерть Томаса и Марты Уэйн от руки главного антагониста (Джокера) для того, чтобы накалить отношения между главными персонажами. В этой же картине семейная чета Уэйнов падет от действий Джо Чилла (<a href="/name/91087/" class="all">Ричард Брэйк</a>).',
      type: 'FACT',
      spoiler: true,
    },
    {
      value:
        'В ранних вариантах сценария Рейчел должна была быть дальней родственницей семьи Грейсон (Дик Грейсон — первый Робин). Но <a href="/name/41477/" class="all">Нолан</a> удалил этот сценарный ход, чтобы поклонники не ожидали появления Робина в следующих фильмах.',
      type: 'FACT',
      spoiler: true,
    },
    {
      value:
        'В театре «Монарх» чета Уэйнов смотрит оперу «Мефистотель», которую в 1800-х годах поставил Ариго Бойко.',
      type: 'FACT',
      spoiler: true,
    },
  ],
  genres: [
    {
      name: 'боевик',
    },
    {
      name: 'фантастика',
    },
    {
      name: 'приключения',
    },
    {
      name: 'драма',
    },
  ],
  countries: [
    {
      name: 'США',
    },
    {
      name: 'Великобритания',
    },
  ],
  seasonsInfo: [],
  persons: [
    {
      id: 21495,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_21495.jpg',
      name: 'Кристиан Бэйл',
      enName: 'Christian Bale',
      enProfession: 'actor',
    },
    {
      id: 9943,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_9943.jpg',
      name: 'Кэти Холмс',
      enName: 'Katie Holmes',
      enProfession: 'actor',
    },
    {
      id: 3711,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3711.jpg',
      name: 'Майкл Кейн',
      enName: 'Michael Caine',
      enProfession: 'actor',
    },
    {
      id: 5005,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_5005.jpg',
      name: 'Киллиан Мёрфи',
      enName: 'Cillian Murphy',
      enProfession: 'actor',
    },
    {
      id: 4545,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_4545.jpg',
      name: 'Том Уилкинсон',
      enName: 'Tom Wilkinson',
      enProfession: 'actor',
    },
    {
      id: 6534,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_6534.jpg',
      name: 'Лиам Нисон',
      enName: 'Liam Neeson',
      enProfession: 'actor',
    },
    {
      id: 30759,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_30759.jpg',
      name: 'Кэн Ватанабэ',
      enName: 'Ken Watanabe',
      enProfession: 'actor',
    },
    {
      id: 6650,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_6650.jpg',
      name: 'Гари Олдман',
      enName: 'Gary Oldman',
      enProfession: 'actor',
    },
    {
      id: 6750,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_6750.jpg',
      name: 'Морган Фриман',
      enName: 'Morgan Freeman',
      enProfession: 'actor',
    },
    {
      id: 19216,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_19216.jpg',
      name: 'Рутгер Хауэр',
      enName: 'Rutger Hauer',
      enProfession: 'actor',
    },
    {
      id: 20326,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_20326.jpg',
      name: 'Раде Шербеджия',
      enName: 'Rade Serbedzija',
      enProfession: 'actor',
    },
    {
      id: 3254,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3254.jpg',
      name: 'Марк Бун мл.',
      enName: 'Mark Boone Junior',
      enProfession: 'actor',
    },
    {
      id: 13172,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_13172.jpg',
      name: 'Лайнас Роуч',
      enName: 'Linus Roache',
      enProfession: 'actor',
    },
    {
      id: 41481,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_41481.jpg',
      name: 'Ларри Холден',
      enName: 'Larry Holden',
      enProfession: 'actor',
    },
    {
      id: 94054,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_94054.jpg',
      name: 'Джерард Мерфи',
      enName: 'Gerard Murphy',
      enProfession: 'actor',
    },
    {
      id: 23513,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_23513.jpg',
      name: 'Колин Макфарлэйн',
      enName: 'Colin McFarlane',
      enProfession: 'actor',
    },
    {
      id: 60114,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_60114.jpg',
      name: 'Сара Стюарт',
      enName: 'Sara Stewart',
      enProfession: 'actor',
    },
    {
      id: 556890,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_556890.jpg',
      name: 'Гас Льюис',
      enName: 'Gus Lewis',
      enProfession: 'actor',
    },
    {
      id: 91087,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_91087.jpg',
      name: 'Ричард Брэйк',
      enName: 'Richard Brake',
      enProfession: 'actor',
    },
    {
      id: 464676,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_464676.jpg',
      name: 'Эмма Локхарт',
      enName: 'Emma Lockhart',
      enProfession: 'actor',
    },
    {
      id: 239206,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_239206.jpg',
      name: 'Кристин Адамс',
      enName: 'Christine Adams',
      enProfession: 'actor',
    },
    {
      id: 572242,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_572242.jpg',
      name: 'Катрин Портер',
      enName: 'Catherine Porter',
      enProfession: 'actor',
    },
    {
      id: 69157,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_69157.jpg',
      name: 'Джон Нолан',
      enName: 'John Nolan',
      enProfession: 'actor',
    },
    {
      id: 1959696,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_1959696.jpg',
      name: 'Карен Дэвид',
      enName: 'Karen David',
      enProfession: 'actor',
    },
    {
      id: 539733,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_539733.jpg',
      name: 'Джонатан Д. Эллис',
      enName: 'Jonathan D. Ellis',
      enProfession: 'actor',
    },
    {
      id: 223530,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_223530.jpg',
      name: 'Тамер Хассан',
      enName: 'Tamer Hassan',
      enProfession: 'actor',
    },
    {
      id: 739201,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_739201.jpg',
      name: 'Ронан Лихи',
      enName: 'Ronan Leahy',
      enProfession: 'actor',
    },
    {
      id: 36569,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_36569.jpg',
      name: 'Винсент Вонг',
      enName: 'Vincent Wong',
      enProfession: 'actor',
    },
    {
      id: 25964,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_25964.jpg',
      name: 'Том У',
      enName: 'Tom Wu',
      enProfession: 'actor',
    },
    {
      id: 739202,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_739202.jpg',
      name: 'Марк Чи',
      enName: 'Mark Chiu',
      enProfession: 'actor',
    },
    {
      id: 426040,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_426040.jpg',
      name: 'Турбо',
      enName: 'Turbo',
      enProfession: 'actor',
    },
    {
      id: 24363,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24363.jpg',
      name: 'Сай-Кит Юнг',
      enName: 'Sai-Kit Yung',
      enProfession: 'actor',
    },
    {
      id: 631703,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_631703.jpg',
      name: 'Чайк Чан',
      enName: 'Chike Chan',
      enProfession: 'actor',
    },
    {
      id: 739205,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_739205.jpg',
      name: 'Тензин Клайв Болл',
      enName: 'Tenzin Clive Ball',
      enProfession: 'actor',
    },
    {
      id: 739206,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_739206.jpg',
      name: 'Тензин Гирме',
      enName: 'Tenzin Gyurme',
      enProfession: 'actor',
    },
    {
      id: 31570,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_31570.jpg',
      name: 'Джэми Чо',
      enName: 'Jamie Cho',
      enProfession: 'actor',
    },
    {
      id: 379929,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_379929.jpg',
      name: 'Дэвид Мюррэй',
      enName: 'David Murray',
      enProfession: 'actor',
    },
    {
      id: 128363,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_128363.jpg',
      name: 'Джон Кэйзек',
      enName: 'John Kazek',
      enProfession: 'actor',
    },
    {
      id: 7594,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_7594.jpg',
      name: 'Дарра Келли',
      enName: 'Darragh Kelly',
      enProfession: 'actor',
    },
    {
      id: 739207,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_739207.jpg',
      name: 'Патрик Нолан',
      enName: 'Patrick Nolan',
      enProfession: 'actor',
    },
    {
      id: 50532,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_50532.jpg',
      name: 'Джозеф Рай',
      enName: 'Joseph Rye',
      enProfession: 'actor',
    },
    {
      id: 739208,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_739208.jpg',
      name: 'Кваку Анкомах',
      enName: 'Kwaku Ankomah',
      enProfession: 'actor',
    },
    {
      id: 226521,
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_226521.jpg',
      name: 'Джо Мартин',
      enName: 'Jo Martin',
      enProfession: 'actor',
    },
  ],
  lists: [],
  typeNumber: 1,
  alternativeName: 'Batman Begins',
  enName: null,
  names: [
    {
      name: 'Бэтмен: Начало',
    },
    {
      name: 'Batman Begins',
    },
  ],
  ageRating: 16,
  ratingMpaa: 'pg13',
  updatedAt: '2022-11-06T16:36:37.594Z',
  imagesInfo: {
    _id: '61c982429f08e3d2a280f834',
    framesCount: 117,
  },
  similarMovies: [
    {
      _id: '62e0c809028619ccaff1710e',
      id: 447301,
      name: 'Начало',
      enName: 'Inception',
      alternativeName: 'Inception',
      poster: {
        _id: '62e0c809028619ccaff1710f',
        url: 'https://st.kp.yandex.net/images/film_big/447301.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_447301.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17110',
      id: 252641,
      name: 'Хранители',
      enName: 'Watchmen',
      alternativeName: 'Watchmen',
      poster: {
        _id: '62e0c809028619ccaff17111',
        url: 'https://st.kp.yandex.net/images/film_big/252641.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_252641.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17112',
      id: 61237,
      name: 'Железный человек',
      enName: 'Iron Man',
      alternativeName: 'Iron Man',
      poster: {
        _id: '62e0c809028619ccaff17113',
        url: 'https://st.kp.yandex.net/images/film_big/61237.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_61237.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17114',
      id: 278217,
      name: 'Новый Человек-паук',
      enName: 'The Amazing Spider-Man',
      alternativeName: 'The Amazing Spider-Man',
      poster: {
        _id: '62e0c809028619ccaff17115',
        url: 'https://st.kp.yandex.net/images/film_big/278217.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_278217.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17116',
      id: 263531,
      name: 'Мстители',
      enName: 'The Avengers',
      alternativeName: 'The Avengers',
      poster: {
        _id: '62e0c809028619ccaff17117',
        url: 'https://st.kp.yandex.net/images/film_big/263531.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_263531.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17118',
      id: 252667,
      name: 'Человек из стали',
      enName: 'Man of Steel',
      alternativeName: 'Man of Steel',
      poster: {
        _id: '62e0c809028619ccaff17119',
        url: 'https://st.kp.yandex.net/images/film_big/252667.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_252667.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff1711a',
      id: 4205,
      name: 'Бэтмен',
      enName: 'Batman',
      alternativeName: 'Batman',
      poster: {
        _id: '62e0c809028619ccaff1711b',
        url: 'https://st.kp.yandex.net/images/film_big/4205.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4205.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff1711c',
      id: 898,
      name: 'Бэтмен возвращается',
      enName: 'Batman Returns',
      alternativeName: 'Batman Returns',
      poster: {
        _id: '62e0c809028619ccaff1711d',
        url: 'https://st.kp.yandex.net/images/film_big/898.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_898.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff1711e',
      id: 86208,
      name: '«V» значит Вендетта',
      enName: 'V for Vendetta',
      alternativeName: 'V for Vendetta',
      poster: {
        _id: '62e0c809028619ccaff1711f',
        url: 'https://st.kp.yandex.net/images/film_big/86208.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_86208.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17120',
      id: 411924,
      name: 'Железный человек 2',
      enName: 'Iron Man 2',
      alternativeName: 'Iron Man 2',
      poster: {
        _id: '62e0c809028619ccaff17121',
        url: 'https://st.kp.yandex.net/images/film_big/411924.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_411924.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17122',
      id: 462762,
      name: 'Железный человек 3',
      enName: 'Iron Man Three',
      alternativeName: 'Iron Man Three',
      poster: {
        _id: '62e0c809028619ccaff17123',
        url: 'https://st.kp.yandex.net/images/film_big/462762.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_462762.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17124',
      id: 661938,
      name: 'Стрела',
      enName: 'Arrow',
      alternativeName: 'Arrow',
      poster: {
        _id: '62e0c809028619ccaff17125',
        url: 'https://st.kp.yandex.net/images/film_big/661938.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_661938.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17126',
      id: 409600,
      name: 'Доктор Стрэндж',
      enName: 'Doctor Strange',
      alternativeName: 'Doctor Strange',
      poster: {
        _id: '62e0c809028619ccaff17127',
        url: 'https://st.kp.yandex.net/images/film_big/409600.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_409600.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17128',
      id: 104904,
      name: 'Люди Икс: Начало. Росомаха',
      enName: 'X-Men Origins: Wolverine',
      alternativeName: 'X-Men Origins: Wolverine',
      poster: {
        _id: '62e0c809028619ccaff17129',
        url: 'https://st.kp.yandex.net/images/film_big/104904.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_104904.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff1712a',
      id: 770631,
      name: 'Бэтмен против Супермена: На заре справедливости',
      enName: 'Batman v Superman: Dawn of Justice',
      alternativeName: 'Batman v Superman: Dawn of Justice',
      poster: {
        _id: '62e0c809028619ccaff1712b',
        url: 'https://st.kp.yandex.net/images/film_big/770631.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_770631.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff1712c',
      id: 1809,
      name: 'Бэтмен навсегда',
      enName: 'Batman Forever',
      alternativeName: 'Batman Forever',
      poster: {
        _id: '62e0c809028619ccaff1712d',
        url: 'https://st.kp.yandex.net/images/film_big/1809.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_1809.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff1712e',
      id: 2898,
      name: 'Человек-паук 2',
      enName: 'Spider-Man 2',
      alternativeName: 'Spider-Man 2',
      poster: {
        _id: '62e0c809028619ccaff1712f',
        url: 'https://st.kp.yandex.net/images/film_big/2898.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_2898.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17130',
      id: 462754,
      name: 'Росомаха: Бессмертный',
      enName: 'The Wolverine',
      alternativeName: 'The Wolverine',
      poster: {
        _id: '62e0c809028619ccaff17131',
        url: 'https://st.kp.yandex.net/images/film_big/462754.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_462754.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17132',
      id: 3678,
      name: 'Бэтмен и Робин',
      enName: 'Batman & Robin',
      alternativeName: 'Batman & Robin',
      poster: {
        _id: '62e0c809028619ccaff17133',
        url: 'https://st.kp.yandex.net/images/film_big/3678.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_3678.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17134',
      id: 817509,
      name: 'Сорвиголова',
      enName: 'Daredevil',
      alternativeName: 'Daredevil',
      poster: {
        _id: '62e0c809028619ccaff17135',
        url: 'https://st.kp.yandex.net/images/film_big/817509.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_817509.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17136',
      id: 274730,
      name: 'Ларго Винч: Начало',
      enName: 'Largo Winch',
      alternativeName: 'Largo Winch',
      poster: {
        _id: '62e0c809028619ccaff17137',
        url: 'https://st.kp.yandex.net/images/film_big/274730.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_274730.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17138',
      id: 290751,
      name: 'Зелёный Шершень',
      enName: 'The Green Hornet',
      alternativeName: 'The Green Hornet',
      poster: {
        _id: '62e0c809028619ccaff17139',
        url: 'https://st.kp.yandex.net/images/film_big/290751.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_290751.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff1713a',
      id: 804748,
      name: 'Готэм',
      enName: 'Gotham',
      alternativeName: 'Gotham',
      poster: {
        _id: '62e0c809028619ccaff1713b',
        url: 'https://st.kp.yandex.net/images/film_big/804748.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_804748.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff1713c',
      id: 535266,
      name: 'Бэтмен: Год первый',
      enName: 'Batman: Year One',
      alternativeName: 'Batman: Year One',
      poster: {
        _id: '62e0c809028619ccaff1713d',
        url: 'https://st.kp.yandex.net/images/film_big/535266.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_535266.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff1713e',
      id: 648,
      name: 'Сорвиголова',
      enName: 'Daredevil',
      alternativeName: 'Daredevil',
      poster: {
        _id: '62e0c809028619ccaff1713f',
        url: 'https://st.kp.yandex.net/images/film_big/648.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_648.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17140',
      id: 3509,
      name: 'Тень',
      enName: 'The Shadow',
      alternativeName: 'The Shadow',
      poster: {
        _id: '62e0c809028619ccaff17141',
        url: 'https://st.kp.yandex.net/images/film_big/3509.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_3509.jpg',
      },
    },
    {
      _id: '62e0c809028619ccaff17142',
      id: 38472,
      name: 'Возвращение Супермена',
      enName: 'Superman Returns',
      alternativeName: 'Superman Returns',
      poster: {
        _id: '62e0c809028619ccaff17143',
        url: 'https://st.kp.yandex.net/images/film_big/38472.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_38472.jpg',
      },
    },
  ],
  shortDescription:
    'Миллиардер объявляет войну несправедливости. История супергероя без сверхспособностей глазами Кристофера Нолана',
  technology: {
    _id: '62f7d7b1252c8469ef124009',
    hasImax: false,
    has3D: false,
  },
  ticketsOnSale: false,
  sequelsAndPrequels: [
    {
      _id: '62ee56bb0f5be41246c923f8',
      id: 401176,
      name: 'Бэтмен: Рыцарь Готэма',
      enName: 'Batman: Gotham Knight',
      alternativeName: 'Batman: Gotham Knight',
      type: 'sequel',
      poster: {
        _id: '62ee56bb0f5be41246c923f9',
        url: 'https://st.kp.yandex.net/images/film_big/401176.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_401176.jpg',
      },
    },
    {
      _id: '62ee56bb0f5be41246c923fa',
      id: 111543,
      name: 'Темный рыцарь',
      enName: 'The Dark Knight',
      alternativeName: 'The Dark Knight',
      type: 'sequel',
      poster: {
        _id: '62ee56bb0f5be41246c923fb',
        url: 'https://st.kp.yandex.net/images/film_big/111543.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_111543.jpg',
      },
    },
    {
      _id: '62ee56bb0f5be41246c923fc',
      id: 437410,
      name: 'Темный рыцарь: Возрождение легенды',
      enName: 'The Dark Knight Rises',
      alternativeName: 'The Dark Knight Rises',
      type: 'sequel',
      poster: {
        _id: '62ee56bb0f5be41246c923fd',
        url: 'https://st.kp.yandex.net/images/film_big/437410.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_437410.jpg',
      },
    },
  ],
  top10: null,
  top250: null,
  createDate: '2022-11-06T16:45:48.236Z',
  releaseYears: [],
};

interface IInfoItem {
  name: string;
  value: string | undefined;
  condition: boolean;
  extraClass?: string;
}

const FilmPage: FC = () => {
  const getWorldFees = (): number => {
    if (mock.fees?.world?.value && mock.fees?.usa?.value) {
      return mock.fees?.world?.value - mock.fees?.usa?.value;
    }

    return 0;
  };

  const infoItems: IInfoItem[] = [
    {
      name: 'Год производства',
      value: `${mock.year}`,
      condition: Boolean(mock.year),
    },
    {
      name: 'Страна',
      value: mock.countries?.map((item) => item.name).join(', '),
      condition: Boolean(mock.countries?.length),
    },
    {
      name: 'Жанр',
      value: mock.genres?.map((item) => item.name).join(', '),
      condition: Boolean(mock.genres?.length),
    },
    {
      name: 'Слоган',
      value: `«${mock.slogan}»`,
      condition: Boolean(mock.slogan),
      extraClass: 'movie-info__data movie-info__data--slogan',
    },
    {
      name: 'Бюджет',
      value: `${mock.budget?.currency}${convertNumbers(mock.budget?.value)}`,
      condition: Boolean(mock.budget?.value),
    },
    {
      name: 'Сборы в США',
      value: `${mock.fees?.usa?.currency}${convertNumbers(
        mock.fees?.usa?.value
      )}`,
      condition: Boolean(mock.fees?.usa?.value),
    },
    {
      name: 'Сборы в мире',
      value: `+ ${mock.fees?.world?.currency}${convertNumbers(
        getWorldFees()
      )} = ${mock.fees?.world?.currency}${convertNumbers(
        mock.fees?.world?.value
      )}`,
      condition: Boolean(mock.fees?.world?.value),
    },
    {
      name: 'Премьера в Росcии',
      value: formatDate(mock.premiere?.russia),
      condition: Boolean(formatDate(mock.premiere?.russia)),
    },
    {
      name: 'Премьера в мире',
      value: formatDate(mock.premiere?.world),
      condition: Boolean(formatDate(mock.premiere?.world)),
    },
    {
      name: 'Возраст',
      value: `${mock.ageRating}+`,
      condition: Boolean(mock.ageRating),
      extraClass: 'movie-info__data movie-info__data--age',
    },
    {
      name: 'Время',
      value: `${mock.movieLength} мин / ${getMovieDuration(mock.movieLength)}`,
      condition: Boolean(mock.movieLength),
    },
  ];

  // todo заменить
  const [isFavourite, setIsFavourite] = useState(false);

  const getFavouriteClass = (): string => {
    return isFavourite
      ? 'section-main__favourite-btn section-main__favourite-btn--active'
      : 'section-main__favourite-btn';
  };

  const favouriteClickHandler = (): void => {
    setIsFavourite(!isFavourite);
  };
  // todo end

  const tabs: ITabBar[] = [
    {
      id: 0,
      name: TabsNameEnum.OVERVIEW,
      routeName: '',
    },
    {
      id: 1,
      name: TabsNameEnum.FACTS,
      routeName: 'facts',
    },
    {
      id: 2,
      name: TabsNameEnum.IMAGES,
      routeName: 'images',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const findActiveTab = (tabId: number): void => {
    const a = tabs.find((tab) => tab.id === tabId);
    navigate(a?.routeName ?? '');
  };

  const tabClickHandler = (tabId: number): void => {
    setActiveTab(tabId);
    findActiveTab(tabId);
  };

  useEffect(() => {
    const route = location.pathname.split('/')[3];
    if (route) {
      const activeTab = tabs.find((tab) => tab.routeName === route);
      activeTab && setActiveTab(activeTab.id);
    }
  }, []);

  const getSimilarMovies = (): ISimilarMovie[] => {
    return mock.similarMovies ?? ([] as ISimilarMovie[]);
  };

  return (
    <div className="film-page page">
      <div className="container film-page__container">
        <div className="film-page__content">
          <section className="film-page__section section-left">
            <div className="section-left__poster">
              <img
                src={mock.poster?.previewUrl}
                alt={mock.name}
                className="section-left__img"
              />
            </div>
          </section>
          <section className="film-page__section section-main">
            <div className="section-main__head">
              <h1 className="section-main__title">{mock.name}</h1>
              <p className="section-main__subtitle">
                {mock.enName || mock.alternativeName}
              </p>
              <p className="section-main__short-description">
                {mock.shortDescription}
              </p>
            </div>
            <div className="section-main__buttons">
              <button type="button" className="section-main__watch-btn">
                <span className="section-main__watch-btn-icon">
                  <svg>
                    <use xlinkHref="/images/icon-play.svg#play" />
                  </svg>
                </span>
                <span className="section-main__watch-btn-name">Смотреть</span>
              </button>
              <button
                onClick={() => favouriteClickHandler()}
                className={getFavouriteClass()}
                type="button"
              >
                <span className="section-main__favourite-btn-icon">
                  <svg>
                    <use xlinkHref="/images/icon-favourites-fill.svg#favourites" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="section-main__info movie-info">
              <h3 className="movie-info__head">О фильме</h3>
              <div className="movie-info__wrapper">
                <div className="movie-info__main">
                  <ul className="movie-info__list">
                    {infoItems.map((item, index) => (
                      <li key={index} className="movie-info__item">
                        <span className="movie-info__name">{item.name}</span>

                        {item.extraClass ? (
                          <span className={item.extraClass}>
                            {item.condition ? item.value : '—'}
                          </span>
                        ) : (
                          <span className="movie-info__data">
                            {item.condition ? item.value : '—'}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="movie-info__actors">
                  <h4 className="movie-info__title">В ролях:</h4>
                  <ul className="movie-info__actors-list">
                    {mock.persons?.slice(0, 10).map((item, index) => (
                      <li
                        key={item.id || index}
                        className="movie-info__actors-item"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                  {mock.persons?.length && (
                    <p className="movie-info__actors-number">
                      Актеров: {mock.persons?.length}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="film-page__tabs">
          <TabBar tabs={tabs} activeId={activeTab} onClick={tabClickHandler} />
          <div className="film-page__tabs-content">
            <Outlet
              context={{ content: mock.description, facts: mock.facts }}
            />
          </div>
        </div>
        <div className="film-page__similar">
          <SimilarMovies items={getSimilarMovies()} />
        </div>
      </div>
    </div>
  );
};

type ContextType = {
  content: string | null;
  facts: IFact[] | null;
};

export const useContextForOutlet = () => {
  return useOutletContext<ContextType>();
};

export default FilmPage;
