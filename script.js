'use strict'

const numberoffilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberoffilms,
    movies: {},
    actors: {}, 
    genres: [],
    privat: false
};


/* const a = prompt("Один из последних посмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних посмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", ""); */

/* personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */




for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних посмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done')
    } else {
        console.log('Eror')
        i--;
    }

} 

if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert('Вы класический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман батинька!');
}
  else {
      alert('Хьюстон у нас ошибка!');
  }

console.log(personalMovieDB);