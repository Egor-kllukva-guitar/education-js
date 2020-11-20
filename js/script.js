"use strict";

const numberOfFilms = +prompt('Сколько фильмов всего вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}; 

const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt ('На сколько оценили его?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt ('На сколько оценили его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);