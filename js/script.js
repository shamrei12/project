const numberOfFiilms =+prompt('Сколько фильмов Вы уже посмотрели?', '') ;

const personalMovieDB = {
    count:numberOfFiilms,
    movies:{},
    actors:{},
    ganres:[],
    privat: false
};

    for(let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько вы его оцените?', '');
              
              if(a != null && b != null && a !=''&& b != '' && a.length <50){
                personalMovieDB.movies[a] = b;
                console.log('done');
              }else{
                  console.log('Error');
                  i--;
              }
              
        }
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");     
          }
          else if(personalMovieDB.count <= 10 && personalMovieDB.count < 30 ){
              console.log("Вы классический зритель");
          }
          else if(personalMovieDB.count >= 30){
              console.log("Вы классический зритель");
          }
          else{
            console.log("Произошла ошибка");
          }
      
      console.log(personalMovieDB);
