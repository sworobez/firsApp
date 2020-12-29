'use strict'

const numberoffilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberoffilms,
    movies: {},
    actors: {}, 
    genres: [],
    privat: false
};


const firstNameFilms = prompt("Один из последних посмотренных фильмов?", "");
const firstFilmRating = prompt("На сколько оцените его?", "");
const twoNameFilms = prompt("Один из последних посмотренных фильмов?", "");
const twoFilmRating = prompt("На сколько оцените его?", "");

personalMovieDB.movies[firstNameFilms] = firstFilmRating;
personalMovieDB.movies[twoNameFilms] = twoFilmRating;

console.log(personalMovieDB);