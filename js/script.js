const numberOfFiilms =+prompt('Сколько фильмов Вы уже посмотрели?', '') ;

const personalMovieDB = {
    count:numberOfFiilms,
    movies:{},
    actors:{},
    ganres:[],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько вы его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько вы его оцените?', ''),
      e = prompt('Помните актера?', ''),
      f = prompt('Оценка актрера?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
      personalMovieDB.actors[e] = f;
      console.log(personalMovieDB);
