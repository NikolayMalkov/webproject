const numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ""),
      b = prompt('Какую оценку Вы поставили фильму?',""),
      c = prompt('Один из последних просмотренных фильмов?', ""),
      d = prompt('Какую оценку Вы поставили фильму?',"");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);