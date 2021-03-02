"use strict";
let numberOfFiilms;

function start(){
     numberOfFiilms =+prompt('Сколько фильмов Вы уже посмотрели?', '') ;
     while( numberOfFiilms == '' || numberOfFiilms == null || isNaN(numberOfFiilms)){
        numberOfFiilms =+prompt('Сколько фильмов Вы уже посмотрели?', '') ;
      }
}
start();

const personalMovieDB = {
    count:numberOfFiilms,
    movies:{},
    actors:{},
    ganres:[],
    privat: false
};
function rememberMyFilms(){
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
}
rememberMyFilms();
    
          function detectPersonalLevel(){
            
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
          }
          detectPersonalLevel();
      
      console.log(personalMovieDB);
      function showMyDB(hidden){
          if(!hidden){
            console.log(numberOfFiilms);
          }
      }
      showMyDB(personalMovieDB.privat);

      function writeYourGenres (){
        for(let i = 1; i<=3; i++){
            const ganre=prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.ganres[i-1] = ganre;
        }
      }
      writeYourGenres();
