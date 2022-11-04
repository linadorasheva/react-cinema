import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import Section from '../../components/Section/Section';
// import { useTypedSelector } from '../../hooks/redux';
// import { useGetMoviesQuery } from '../../services/MovieService';
import { RoutesNameEnum } from '../../types/common';

const mocks = {
  docsSer: [
    {
      externalId: {
        _id: '6336d0ab248263ce89c0879a',
        imdb: 'tt7631058',
      },
      logo: {
        _id: '6336d0ab248263ce89c08798',
        url: null,
      },
      poster: {
        _id: '63397ad0c22d011bb577b6da',
        url: 'https://st.kp.yandex.net/images/film_big/1112513.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_1112513.jpg',
      },
      rating: {
        _id: '63476b29a7faa4cbfc929c52',
        kp: 5.738,
        imdb: 6.9,
        filmCritics: 0,
        russianFilmCritics: 80,
        await: 96.38,
      },
      votes: {
        _id: '63476b29a7faa4cbfc929c53',
        kp: 36137,
        imdb: 218119,
        filmCritics: 0,
        russianFilmCritics: 5,
        await: 32091,
      },
      id: 1112513,
      type: 'tv-series',
      name: 'Властелин колец: Кольца власти',
      description:
        'Несмотря на то, что наступили времена относительного мира, герои вынуждены противостоять возрождению зла в Средиземье. Повсюду — от самых мрачных глубин Мглистых гор до величественных лесов Линдона, захватывающего дух островного королевства Нуменор и самых дальних уголков мира — в каждом королевстве герои событий создают наследие, которое будет жить еще долго после их ухода.',
      year: 2022,
      alternativeName: 'The Lord of the Rings: The Rings of Power',
      enName: null,
      movieLength: null,
      names: [
        {
          _id: '63397ad0c22d011bb577b6d6',
          name: 'Властелин колец: Кольца власти',
        },
        {
          _id: '63397ad0c22d011bb577b6d7',
          name: 'The Lord of the Rings: The Rings of Power',
        },
      ],
      shortDescription: null,
    },
    {
      externalId: {
        _id: '63398047c22d011bb592b5bd',
        imdb: 'tt11198330',
      },
      logo: {
        _id: '6336d384248263ce89c1198e',
        url: null,
      },
      poster: {
        _id: '63398047c22d011bb592b5c2',
        url: 'https://st.kp.yandex.net/images/film_big/1316601.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_1316601.jpg',
      },
      rating: {
        _id: '63499a1fa7faa4cbfcff7ffd',
        kp: 8.27,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 98.2,
      },
      votes: {
        _id: '63499a1fa7faa4cbfcff7ffe',
        kp: 197047,
        imdb: 177093,
        filmCritics: 0,
        russianFilmCritics: 2,
        await: 41835,
      },
      id: 1316601,
      type: 'tv-series',
      name: 'Дом Дракона',
      description: 'О борьбе за власть между двумя ветвями дома Таргариенов.',
      year: 2022,
      alternativeName: 'House of the Dragon',
      enName: null,
      movieLength: null,
      names: [
        {
          _id: '63398047c22d011bb592b5be',
          name: 'Дом Дракона',
        },
        {
          _id: '63398047c22d011bb592b5bf',
          name: 'House of the Dragon',
        },
      ],
      shortDescription:
        'Таргариены ведут друг с другом ожесточенную борьбу за Железный трон. Самый долгожданный сериал года',
    },
    {
      externalId: {
        _id: '6336d40c248263ce89c13229',
        imdb: 'tt1751634',
      },
      logo: {
        _id: '6336d40c248263ce89c13227',
        url: null,
      },
      poster: {
        _id: '63397cd3c22d011bb582beb8',
        url: 'https://st.kp.yandex.net/images/film_big/574740.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_574740.jpg',
      },
      rating: {
        _id: '63476ca6a7faa4cbfc946284',
        kp: 7.158,
        imdb: 7.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 98.34,
      },
      votes: {
        _id: '63476ca6a7faa4cbfc946285',
        kp: 17988,
        imdb: 126003,
        filmCritics: 0,
        russianFilmCritics: 1,
        await: 9272,
      },
      id: 574740,
      type: 'tv-series',
      name: 'Песочный человек',
      description:
        'В результате тайного ритуала повелитель снов Морфей оказывается в плену у оккультиста. Спустя 100 лет ему удается бежать. В его отсутствие мир сильно изменился. Теперь Морфею предстоит вернуть былую силу, возродить свое царство и понять, как изменился он сам.',
      year: 2022,
      alternativeName: 'The Sandman',
      enName: null,
      movieLength: 45,
      names: [
        {
          _id: '63397cd3c22d011bb582beb4',
          name: 'Песочный человек',
        },
        {
          _id: '63397cd3c22d011bb582beb5',
          name: 'The Sandman',
        },
      ],
      shortDescription: null,
    },
    {
      externalId: {
        _id: '6336d182248263ce89c0b726',
        imdb: 'tt10857160',
      },
      logo: {
        _id: '6336d182248263ce89c0b724',
        url: null,
      },
      poster: {
        _id: '63397f30c22d011bb58e85d0',
        url: 'https://st.kp.yandex.net/images/film_big/1301509.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_1301509.jpg',
      },
      rating: {
        _id: '63476df9a7faa4cbfc95e522',
        kp: 5.548,
        imdb: 5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 91.37,
      },
      votes: {
        _id: '63476df9a7faa4cbfc95e523',
        kp: 11150,
        imdb: 120731,
        filmCritics: 0,
        russianFilmCritics: 1,
        await: 8182,
      },
      id: 1301509,
      type: 'tv-series',
      name: 'Женщина-Халк: Адвокат',
      description:
        'После переливания крови двоюродная сестра Брюса Бэннера юристка Дженнифер Уолтерс получает способность во время стресса перевоплощаться в сверхсильное существо. Дженнифер предстоит научиться управлять этим даром и применять его во благо при этом продолжать работать в недавно созданном Отделе по правам сверхлюдей.',
      year: 2022,
      alternativeName: 'She-Hulk: Attorney at Law',
      enName: null,
      movieLength: 35,
      names: [
        {
          _id: '63397f30c22d011bb58e85cc',
          name: 'Женщина-Халк: Адвокат',
        },
        {
          _id: '63397f30c22d011bb58e85cd',
          name: 'She-Hulk: Attorney at Law',
        },
      ],
      shortDescription: null,
    },
    {
      externalId: {
        _id: '6336d4c2248263ce89c1523f',
        imdb: 'tt9288030',
      },
      logo: {
        _id: '6336d4c2248263ce89c1523d',
        url: null,
      },
      poster: {
        _id: '63397ec3c22d011bb58c82e0',
        url: 'https://st.kp.yandex.net/images/film_big/1209839.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_1209839.jpg',
      },
      rating: {
        _id: '63476de9a7faa4cbfc95d481',
        kp: 7.312,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 97.57,
      },
      votes: {
        _id: '63476de9a7faa4cbfc95d482',
        kp: 11262,
        imdb: 117207,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 980,
      },
      id: 1209839,
      type: 'tv-series',
      name: 'Джек Ричер',
      description:
        'Джек Ричер, бывший майор военной полиции, посещает небольшой городок, где его арестовывают по подозрению в убийстве борца с коррупцией. Когда местная полиция понимает, что этот здоровяк с опасной внешностью совсем не тот, кого они ищут, ему предлагают сотрудничество в поиске настоящих убийц.',
      year: 2022,
      alternativeName: 'Reacher',
      enName: null,
      movieLength: 49,
      names: [
        {
          _id: '63397ec3c22d011bb58c82dc',
          name: 'Джек Ричер',
        },
        {
          _id: '63397ec3c22d011bb58c82dd',
          name: 'Reacher',
        },
      ],
      shortDescription: null,
    },
    {
      externalId: {
        _id: '6336d8dc248263ce89c21c17',
        imdb: 'tt13146488',
      },
      logo: {
        _id: '6336d8dc248263ce89c21c15',
        url: 'https://avatars.mds.yandex.net/get-ott/239697/2a000001809a01b0387f80fde75c0679f8be/orig',
      },
      poster: {
        _id: '63397840c22d011bb56a9567',
        url: 'https://st.kp.yandex.net/images/film_big/1421587.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_1421587.jpg',
      },
      rating: {
        _id: '6347320ba7faa4cbfc70332e',
        kp: 8.086,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 50,
        await: 96.05,
      },
      votes: {
        _id: '63499b57a7faa4cbfc01514a',
        kp: 73469,
        imdb: 106957,
        filmCritics: 0,
        russianFilmCritics: 6,
        await: 3194,
      },
      id: 1421587,
      alternativeName: 'Peacemaker',
      color: '#101010',
      description:
        'История весьма комичного и очень патриотичного суперзлодея, убивающего всех на своем пути. Его ждут нелегкие поиски преступников, безумные драки и, что самое невероятное, попытки помириться с отцом.',
      enName: null,
      movieLength: 40,
      name: 'Миротворец',
      names: [
        {
          _id: '63397840c22d011bb56a9563',
          name: 'Миротворец',
        },
        {
          _id: '63397840c22d011bb56a9564',
          name: 'Peacemaker',
        },
      ],
      shortDescription:
        'Пацифист безжалостно борется за мир во всем мире и пытается поладить с отцом. Ироничная комедия Джеймса Ганна',
      type: 'tv-series',
      year: 2022,
    },
    {
      externalId: {
        _id: '6336d0eb248263ce89c095ac',
        imdb: 'tt11280740',
      },
      logo: {
        _id: '6336d0eb248263ce89c095aa',
        url: null,
      },
      poster: {
        _id: '63397c81c22d011bb5811f67',
        url: 'https://st.kp.yandex.net/images/film_big/1343318.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_1343318.jpg',
      },
      rating: {
        _id: '63426ce3a7faa4cbfc6017f1',
        kp: 8.251,
        imdb: 8.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 99.6,
      },
      votes: {
        _id: '63476c41a7faa4cbfc93f140',
        kp: 21170,
        imdb: 105787,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 663,
      },
      id: 1343318,
      type: 'tv-series',
      name: 'Разделение',
      description:
        'Руководство компании Lumon Industries придумало новый способ контролировать повседневную деятельность своих сотрудников — «процедуру разделения», отделяющую рабочие воспоминания от обычных. Марк соглашается на процедуру, но вскоре начинает сомневаться в правильности своего выбора.',
      year: 2022,
      alternativeName: 'Severance',
      enName: null,
      movieLength: 55,
      names: [
        {
          _id: '63397c81c22d011bb5811f63',
          name: 'Разделение',
        },
        {
          _id: '63397c81c22d011bb5811f64',
          name: 'Severance',
        },
      ],
      shortDescription: null,
    },
    {
      externalId: {
        _id: '6336db7a248263ce89c29531',
        imdb: 'tt11743610',
      },
      logo: {
        _id: '6336db7a248263ce89c2952f',
        url: null,
      },
      poster: {
        _id: '633981a3c22d011bb597516e',
        url: 'https://st.kp.yandex.net/images/film_big/4396199.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4396199.jpg',
      },
      rating: {
        _id: '63476fa3a7faa4cbfc978b53',
        kp: 7.35,
        imdb: 8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 99.14,
      },
      votes: {
        _id: '63476fa3a7faa4cbfc978b54',
        kp: 6832,
        imdb: 82136,
        filmCritics: 0,
        russianFilmCritics: 1,
        await: 1052,
      },
      id: 4396199,
      alternativeName: 'The Terminal List',
      description:
        'Во время выполнения секретной миссии отряд спецназа попадает в засаду. Единственный выживший в той бойне командир группы Джеймс Рис вернулся домой и похоронил своих боевых товарищей. Вскоре он начинает подозревать, что засада была частью заговора теневых структур, а ему и его близким грозит смертельная опасность.',
      enName: null,
      movieLength: 55,
      name: 'Список смертников',
      names: [
        {
          _id: '633981a3c22d011bb597516a',
          name: 'Список смертников',
        },
        {
          _id: '633981a3c22d011bb597516b',
          name: 'The Terminal List',
        },
      ],
      shortDescription: null,
      type: 'tv-series',
      year: 2022,
    },
    {
      externalId: {
        _id: '6336d38d248263ce89c11b61',
        imdb: 'tt8740976',
      },
      logo: {
        _id: '6336d38d248263ce89c11b5f',
        url: null,
      },
      poster: {
        _id: '63397c75c22d011bb580d5ca',
        url: 'https://st.kp.yandex.net/images/film_big/1318982.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_1318982.jpg',
      },
      rating: {
        _id: '6344de42a7faa4cbfced81ec',
        kp: 7.025,
        imdb: 6.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 98.12,
      },
      votes: {
        _id: '63476c83a7faa4cbfc943bee',
        kp: 18869,
        imdb: 65998,
        filmCritics: 0,
        russianFilmCritics: 1,
        await: 3044,
      },
      id: 1318982,
      type: 'tv-series',
      name: 'Изобретая Анну',
      description:
        'Анна Делви, также известная как Анна Сорокина, под видом наследницы богатой немецкой семьи проникает в высшее общество Нью-Йорка.',
      year: 2022,
      alternativeName: 'Inventing Anna',
      enName: null,
      movieLength: 65,
      names: [
        {
          _id: '63397c75c22d011bb580d5c6',
          name: 'Изобретая Анну',
        },
        {
          _id: '63397c75c22d011bb580d5c7',
          name: 'Inventing Anna',
        },
      ],
      shortDescription: null,
    },
    {
      externalId: {
        _id: '6336d449248263ce89c13c9b',
        imdb: 'tt2934286',
      },
      logo: {
        _id: '6336d449248263ce89c13c99',
        url: null,
      },
      poster: {
        _id: '63397b25c22d011bb5798304',
        url: 'https://st.kp.yandex.net/images/film_big/771194.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_771194.jpg',
      },
      rating: {
        _id: '63476bc8a7faa4cbfc935f43',
        kp: 7.025,
        imdb: 7.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 97.28,
      },
      votes: {
        _id: '63476bc8a7faa4cbfc935f44',
        kp: 26249,
        imdb: 58042,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 3530,
      },
      id: 771194,
      type: 'tv-series',
      name: 'Halo',
      description:
        'В XXVI веке между земными силами Космического командования Объединённых наций и религиозным союзом нескольких инопланетных рас идёт ожесточённая война. Люди изо всех сил борются за выживание, но всё же сдают позиции на всех фронтах. Последней надеждой становится проект SPARTAN-II — программа создания усиленных людей, которые должны стать самым эффективным оружием в борьбе с пришельцами.',
      year: 2022,
      alternativeName: '',
      enName: null,
      names: [
        {
          _id: '63397b25c22d011bb5798301',
          name: 'Halo',
        },
      ],
      movieLength: 60,
      shortDescription: null,
    },
  ],
  docsFilm: [
    {
      externalId: {
        imdb: 'tt4452272',
      },
      poster: {
        url: 'https://st.kp.yandex.net/images/film_big/901914.jpg',
        previewUrl:
          'https://avatars.mds.yandex.net/get-ott/1672343/2a000001797f755bacf9ed758284ef4abcc0/375x234',
      },
      rating: {
        kp: 8.02,
        imdb: 0,
      },
      votes: {
        kp: 2,
        imdb: 0,
      },
      id: 901914,
      type: 'movie',
      name: 'Military Madness',
      year: 1917,
    },
    {
      externalId: {
        imdb: 'tt7441760',
      },
      poster: {
        url: 'https://st.kp.yandex.net/images/film_big/1095536.jpg',
        previewUrl:
          'https://avatars.mds.yandex.net/get-ott/224348/2a0000018360c01cbda61e17ac91dc48a34e/375x234',
      },
      rating: {
        kp: 5.6,
        imdb: 0,
      },
      votes: {
        kp: 0,
        imdb: 0,
      },
      id: 1095536,
      type: 'movie',
      name: 'Remembering Proof of Concept',
      year: 2016,
    },
    {
      externalId: {
        imdb: 'tt4613354',
      },
      poster: {
        url: 'https://st.kp.yandex.net/images/film_big/906436.jpg',
        previewUrl:
          'https://avatars.mds.yandex.net/get-ott/2385704/2a0000016fae2d473310baacdd4544c2c9e4/375x234',
      },
      rating: {
        kp: 3.0,
        imdb: 0,
      },
      votes: {
        kp: 0,
        imdb: 0,
      },
      id: 906436,
      type: 'movie',
      name: 'Panoptik',
      year: 2015,
    },
    {
      externalId: {
        imdb: 'tt0759669',
      },
      poster: {
        url: 'https://st.kp.yandex.net/images/film_big/451170.jpg',
        previewUrl:
          'https://avatars.mds.yandex.net/get-ott/2385704/2a00000171791cda4a6b276f8fa434651c4e/375x234',
      },
      rating: {
        kp: 6.0,
        imdb: 0,
      },
      votes: {
        kp: 2,
        imdb: 0,
      },
      id: 451170,
      type: 'movie',
      name: "The Sailor's Smiling Spirit",
      year: 1916,
    },
    {
      externalId: {},
      poster: {
        url: 'https://st.kp.yandex.net/images/film_big/427680.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_427680.jpg',
      },
      rating: {
        kp: 7.4,
        imdb: 0,
      },
      votes: {
        kp: 0,
        imdb: 0,
      },
      id: 427680,
      type: 'movie',
      name: 'Таунхаус',
      description:
        'Основанная на романе Тиш Коэн лента расскажет о страдающем агорафобией наследнике рок-звезды, проживающем с сыном в таунхаусе. Каким-то образом ему необходимо поддерживать связь с окружающим миром, и дружба с девочкой по вызову оказывается как нельзя кстати.',
      year: 0,
    },
    {
      externalId: {},
      poster: {
        url: 'https://st.kp.yandex.net/images/film_big/1104954.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_1104954.jpg',
      },
      rating: {
        kp: 0,
        imdb: 0,
      },
      votes: {
        kp: 0,
        imdb: 0,
      },
      id: 1104954,
      type: 'movie',
      name: 'Rebranding Henry',
      year: 0,
    },
    {
      externalId: {
        imdb: 'tt0011269',
      },
      poster: {
        url: 'https://st.kp.yandex.net/images/film_big/157619.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_157619.jpg',
      },
      rating: {
        kp: 0,
        imdb: 0,
      },
      votes: {
        kp: 2,
        imdb: 0,
      },
      id: 157619,
      type: 'movie',
      name: 'Heart of Twenty',
      year: 1920,
    },
    {
      externalId: {
        imdb: 'tt0481478',
      },
      poster: {
        url: 'https://st.kp.yandex.net/images/film_big/253022.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_253022.jpg',
      },
      rating: {
        kp: 0,
        imdb: 0,
      },
      votes: {
        kp: 1,
        imdb: 0,
      },
      id: 253022,
      type: 'movie',
      name: 'Benched: The Corporate Takeover of the Judiciary',
      year: 2005,
    },
    {
      externalId: {},
      poster: {
        url: 'https://st.kp.yandex.net/images/film_big/1011841.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_1011841.jpg',
      },
      rating: {
        kp: 0,
        imdb: 0,
      },
      votes: {
        kp: 0,
        imdb: 0,
      },
      id: 1011841,
      type: 'movie',
      name: 'Kountdown',
      year: 0,
    },
    {
      externalId: {
        tmdb: 455257,
        imdb: 'tt0466671',
      },
      poster: {
        url: 'https://st.kp.yandex.net/images/film_big/118374.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_118374.jpg',
      },
      rating: {
        tmdb: 0,
        kp: 0,
        imdb: 0,
      },
      votes: {
        tmdb: 0,
        kp: 0,
        imdb: 0,
      },
      movieLength: 98,
      id: 118374,
      type: 'movie',
      name: 'Ama... Bakit mo ako pinabayaan?',
      year: 1990,
    },
  ],
  docsCart: [
    {
      externalId: {
        _id: '63371262248263ce89ca56b2',
        imdb: null,
      },
      logo: {
        _id: '63371262248263ce89ca56b0',
        url: null,
      },
      poster: {
        _id: '63398a49c22d011bb5b5cf42',
        url: 'https://st.kp.yandex.net/images/film_big/4963619.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4963619.jpg',
      },
      rating: {
        _id: '63477a05a7faa4cbfca0a353',
        kp: 7.864,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        _id: '63477a05a7faa4cbfca0a354',
        kp: 1167,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      id: 4963619,
      alternativeName: null,
      description:
        'Летом брат с сестрой Саша и Маша обожают гулять в лесу, купаться и загорать. Жаль, что их невнимательность может испортить такое прекрасное время, как летние каникулы. Сашу с Машей поджидает много опасностей: жгучие солнечные лучи, ядовитые растения, морская глубина. Хорошо, что у них есть замечательный друг, супергерой Аркадий Паровозов, который всегда появляется вовремя.',
      enName: null,
      movieLength: null,
      name: 'Аркадий Паровозов спешит на помощь. Безопасность летом',
      names: [
        {
          _id: '63398a49c22d011bb5b5cf3f',
          name: 'Аркадий Паровозов спешит на помощь. Безопасность летом',
        },
      ],
      shortDescription:
        'Супергерой спасает беспечных детей от вполне реальных опасностей. Избранные серии об отдыхе без последствий\n\n',
      type: 'cartoon',
      year: 2022,
    },
    {
      externalId: {
        _id: '63371261248263ce89ca5687',
        imdb: null,
      },
      logo: {
        _id: '63371261248263ce89ca5685',
        url: null,
      },
      poster: {
        _id: '63398634c22d011bb5a74cb4',
        url: 'https://st.kp.yandex.net/images/film_big/4963618.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4963618.jpg',
      },
      rating: {
        _id: '634773e7a7faa4cbfc9b85da',
        kp: 8.197,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        _id: '634773e7a7faa4cbfc9b85db',
        kp: 2834,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      id: 4963618,
      alternativeName: null,
      description:
        'Две кошечки и четыре собачки из сказочного города прекрасно ладят друг с другом. На каникулах у них полно времени, чтобы веселиться вместе. Настала пора запускать воздушных змеев, учиться ездить на велосипеде, а еще можно всем вместе снять собственный музыкальный клип. Ну и конечно, в сильную жару обязательно нужно сделать освежающий мятный лимонад.',
      enName: null,
      movieLength: 40,
      name: 'Кошечки-Собачки. Летние каникулы',
      names: [
        {
          _id: '63398634c22d011bb5a74cb1',
          name: 'Кошечки-Собачки. Летние каникулы',
        },
      ],
      shortDescription:
        'Друзья летом играют на улице, учатся готовить и не обижать друг друга. Избранные серии про щенят и котят',
      type: 'cartoon',
      year: 2022,
    },
    {
      externalId: {
        _id: '6337125f248263ce89ca5611',
        imdb: null,
      },
      logo: {
        _id: '6337125f248263ce89ca560f',
        url: null,
      },
      poster: {
        _id: '633983afc22d011bb59e5dfa',
        url: 'https://st.kp.yandex.net/images/film_big/4963501.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4963501.jpg',
      },
      rating: {
        _id: '63477141a7faa4cbfc991720',
        kp: 8.534,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        _id: '63477141a7faa4cbfc991721',
        kp: 4766,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      id: 4963501,
      names: [
        {
          _id: '633983afc22d011bb59e5df7',
          name: 'Ми-ми-мишки. Путешествия с Кешей и Тучкой',
        },
      ],
      alternativeName: null,
      description:
        'Мишка-изобретатель Кеша еще и непоседа, его вечно куда-то тянет. Он готов построить самый необыкновенный агрегат, который полетит или поплывет. Правда иногда он ломается в самый неподходящий момент, и тогда на помощь приходит мишка-шаман Тучка или маленькая Лисичка. Друзья путешествуют по свету, опускаются на морское дно, а однажды даже застряли на необитаемом острове.',
      enName: null,
      movieLength: 50,
      name: 'Ми-ми-мишки. Путешествия с Кешей и Тучкой',
      shortDescription:
        'Энергия бурого медвежонка переносит друзей то на высокую гору, то, вообще, из осени — в лето. Избранные серии',
      type: 'cartoon',
      year: 2022,
    },
    {
      externalId: {
        _id: '6337125d248263ce89ca55ed',
        imdb: null,
      },
      logo: {
        _id: '6337125d248263ce89ca55eb',
        url: null,
      },
      poster: {
        _id: '63398ac9c22d011bb5bb94d5',
        url: 'https://st.kp.yandex.net/images/film_big/4963388.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4963388.jpg',
      },
      rating: {
        _id: '63496ce4a7faa4cbfcd80976',
        kp: 8.104,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        _id: '63496ce4a7faa4cbfcd80977',
        kp: 617,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      id: 4963388,
      names: [
        {
          _id: '63398ac9c22d011bb5bb94d2',
          name: 'Деревяшки. Летние серии',
        },
      ],
      alternativeName: null,
      description:
        'Малыши-деревяшки заняты летними делами: собирают урожай, греются на солнце, прыгают по лужам. Каждый день лета их ждет новое открытие. Арбуз — самый вкусный груз, если разделить его с друзьями. Гусенице нужно дерево, чтобы превратиться в бабочку. Из пруда вместо рыбки можно выловить потерянные вещи.',
      enName: null,
      movieLength: 34,
      name: 'Деревяшки. Летние серии',
      shortDescription:
        'Одуванчики, бабочки, рыбалка — как прекрасно лето! Получасовой сборник солнечных серий о деревянном мире',
      type: 'cartoon',
      year: 2022,
    },
    {
      externalId: {
        _id: '633989a6c22d011bb5b27bf5',
        imdb: 'tt21281302',
      },
      logo: {
        _id: '633711a0248263ce89ca4053',
        url: null,
      },
      poster: {
        _id: '633989a6c22d011bb5b27bf9',
        url: 'https://st.kp.yandex.net/images/film_big/4961823.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4961823.jpg',
      },
      rating: {
        _id: '6344ebffa7faa4cbfcfab316',
        kp: 6.765,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        _id: '63477920a7faa4cbfc9fe9f1',
        kp: 1324,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 294,
      },
      id: 4961823,
      names: [
        {
          _id: '633989a6c22d011bb5b27bf6',
          name: 'Забытое чудо',
        },
      ],
      alternativeName: null,
      description:
        'Три школьника случайно находят волшебный портал в Свято-Троицкой Сергиевой Лавре и уносятся в прошлое. Теперь их цель — вернуться домой, а для этого надо пройти сквозь чудесный лес XIV века времен татаро-монгольского ига и Куликовской битвы. Помогать подросткам будет преподобный Сергий Радонежский.',
      enName: null,
      movieLength: 90,
      name: 'Забытое чудо',
      shortDescription: null,
      type: 'cartoon',
      year: 2022,
    },
    {
      externalId: {
        _id: '63371125248263ce89ca30d4',
        imdb: null,
      },
      logo: {
        _id: '63371125248263ce89ca30d2',
        url: null,
      },
      poster: {
        _id: '63398d15c22d011bb5d7cdbf',
        url: 'https://st.kp.yandex.net/images/film_big/4997589.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4997589.jpg',
      },
      rating: {
        _id: '63445ab6a7faa4cbfc96a4d8',
        kp: 5.529,
        imdb: 5.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        _id: '6346e8d2a7faa4cbfc3af436',
        kp: 133,
        imdb: 1206,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 162,
      },
      id: 4997589,
      names: [
        {
          _id: '63398d15c22d011bb5d7cdbb',
          name: 'ЛЕГО Звёздные войны: Летние каникулы',
        },
        {
          _id: '63398d15c22d011bb5d7cdbc',
          name: 'LEGO Star Wars Summer Vacation',
        },
      ],
      alternativeName: 'LEGO Star Wars Summer Vacation',
      description:
        'Друзья приезжают отдохнуть после победы над Императором Палпатином. Однако, у каждого из них свое представление об идеальном отпуске.',
      enName: null,
      movieLength: 45,
      name: 'ЛЕГО Звёздные войны: Летние каникулы',
      shortDescription: null,
      type: 'cartoon',
      year: 2022,
    },
    {
      externalId: {
        _id: '63370433248263ce89c89e27',
        imdb: null,
      },
      logo: {
        _id: '63370433248263ce89c89e25',
        url: null,
      },
      poster: {
        _id: '6339845bc22d011bb5a0b746',
        url: 'https://st.kp.yandex.net/images/film_big/4961825.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4961825.jpg',
      },
      rating: {
        _id: '63477224a7faa4cbfc99e930',
        kp: 8.456,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        _id: '63477224a7faa4cbfc99e931',
        kp: 3943,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      id: 4961825,
      alternativeName: null,
      description:
        'В теплые летние дни Кеша, Тучка и их друзья продолжают исследовать окружающий мир. У Кеши есть изобретения на любой случай: неувядающие цветы, машина времени, летающая щекоталка. Тучка любит живую природу и всегда рассчитывает на свои силы. Лисичка знает, как поступать правильно и варит потрясающее варенье из свежей малины. Вместе им никогда не скучно, особенно летом.',
      enName: null,
      movieLength: 60,
      name: 'Ми-ми-мишки. Летние серии',
      names: [
        {
          _id: '6339845bc22d011bb5a0b743',
          name: 'Ми-ми-мишки. Летние серии',
        },
      ],
      shortDescription:
        'Летом можно пить чай в саду и играть в шахматы под открытым небом. Часовой сборник серий любимого мультсериала',
      type: 'cartoon',
      year: 2022,
    },
    {
      externalId: {
        _id: '6337040e248263ce89c89a0e',
        imdb: null,
      },
      logo: {
        _id: '6337040e248263ce89c89a0c',
        url: null,
      },
      poster: {
        _id: '63398adcc22d011bb5bc8d91',
        url: 'https://st.kp.yandex.net/images/film_big/4921147.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4921147.jpg',
      },
      rating: {
        _id: '6346df19a7faa4cbfc315b6a',
        kp: 8.415,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        _id: '6346df19a7faa4cbfc315b6b',
        kp: 502,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1,
      },
      id: 4921147,
      names: [
        {
          _id: '63398adcc22d011bb5bc8d8e',
          name: 'СКАЗ: Песня Сирин',
        },
      ],
      alternativeName: null,
      description:
        'Заподозрив неладное, отшельник Беримир наказывает селянам не ходить в лес, а сам отправляется на поиски местной девочки Анютки. Он находит её и ведёт назад в деревню, но вещая птица Сирин пророчит беду. Беримир решает идти окольным путём.',
      enName: null,
      movieLength: 14,
      name: 'СКАЗ: Песня Сирин',
      shortDescription: null,
      type: 'cartoon',
      year: 2022,
    },
    {
      externalId: {
        _id: '6337013e248263ce89c83e47',
        imdb: 'tt19696852',
      },
      logo: {
        _id: '6337013e248263ce89c83e45',
        url: null,
      },
      poster: {
        _id: '63398c6fc22d011bb5d017ae',
        url: 'https://st.kp.yandex.net/images/film_big/4925294.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4925294.jpg',
      },
      rating: {
        _id: '634974dea7faa4cbfcdffb7c',
        kp: 5.641,
        imdb: 5.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        _id: '634974dea7faa4cbfcdffb7d',
        kp: 181,
        imdb: 741,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      id: 4925294,
      names: [
        {
          _id: '63398c6fc22d011bb5d017aa',
          name: 'Симпсоны: Когда Билли встретила Лизу',
        },
        {
          _id: '63398c6fc22d011bb5d017ab',
          name: 'When Billie Met Lisa',
        },
      ],
      alternativeName: 'When Billie Met Lisa',
      description: 'История знакомства певицы Билли Айлиш и Лизы Симпсон.',
      enName: null,
      movieLength: 4,
      name: 'Симпсоны: Когда Билли встретила Лизу',
      shortDescription: null,
      type: 'cartoon',
      year: 2022,
    },
    {
      externalId: {
        _id: '6336f400248263ce89c65492',
        imdb: null,
      },
      logo: {
        _id: '6336f400248263ce89c65490',
        url: null,
      },
      poster: {
        _id: '6339876ec22d011bb5ab4547',
        url: 'https://st.kp.yandex.net/images/film_big/4389412.jpg',
        previewUrl:
          'https://st.kp.yandex.net/images/film_iphone/iphone360_4389412.jpg',
      },
      rating: {
        _id: '6344e6e0a7faa4cbfcf662e3',
        kp: 6.701,
        imdb: 7,
        filmCritics: 7.2,
        russianFilmCritics: 0,
        await: 98.81,
      },
      votes: {
        _id: '63477552a7faa4cbfc9cc259',
        kp: 2209,
        imdb: 10202,
        filmCritics: 60,
        russianFilmCritics: 0,
        await: 537,
      },
      id: 4389412,
      names: [
        {
          _id: '6339876ec22d011bb5ab4543',
          name: 'Бивис и Батт-Хед уделывают Вселенную',
        },
        {
          _id: '6339876ec22d011bb5ab4544',
          name: 'Beavis and Butt-Head Do the Universe',
        },
      ],
      alternativeName: 'Beavis and Butt-Head Do the Universe',
      description:
        '1998 год. Бивис и Батт-Хед оказываются в космическом лагере, куда их отправил судья по делам несовершеннолетних. Им предлагают поучаствовать в космической миссии, но что-то идёт не так и приятели попадают в чёрную дыру, которая переносит их в 2022 год.',
      enName: null,
      movieLength: 87,
      name: 'Бивис и Батт-Хед уделывают Вселенную',
      shortDescription: null,
      type: 'cartoon',
      year: 2022,
    },
  ],
  total: 596913,
  limit: 10,
  page: 1,
  pages: 59692,
};

const MainPage = () => {
  // const { year, rating, sortByRelease, genre } = useTypedSelector(
  //   (state) => state.filtersReducer
  // );
  // const { data } = useGetMoviesQuery({
  //   filters: {
  //     year,
  //     rating,
  //     sortByRelease,
  //     genre,
  //   },
  //   page: 1,
  //   limit: 10,
  // });

  return (
    <div className="main-page page">
      <Section
        title="Фильмы"
        linkName="Смотреть все"
        url={RoutesNameEnum.FILMS}
      >
        <>
          {mocks.docsFilm.slice(0, 4).map((card) => {
            return <MovieCard key={card.id} card={card} />;
          })}
        </>
      </Section>
      <Section
        title="Сериалы"
        linkName="Смотреть все"
        url={RoutesNameEnum.SERIALS}
      >
        <>
          {mocks.docsSer.slice(0, 4).map((card) => {
            return <MovieCard key={card.id} card={card} />;
          })}
        </>
      </Section>
      <Section
        title="Мультфильмы"
        linkName="Смотреть все"
        url={RoutesNameEnum.CARTOONS}
      >
        <>
          {mocks.docsCart.slice(0, 4).map((card) => {
            return <MovieCard key={card.id} card={card} />;
          })}
        </>
      </Section>
    </div>
  );
};

export default MainPage;
