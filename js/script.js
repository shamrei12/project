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
      d = prompt('На сколько вы его оцените?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
      console.log(personalMovieDB);
