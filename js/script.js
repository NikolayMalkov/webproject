const numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++)
        {
            const a = prompt('Один из последних просмотренных фильмов?', ""),
                     b = prompt('Какую оценку Вы поставили фильму?',"");
            
           personalMovieDB.movies[a] = b;

           if (a != null && b != null && a != '' && b != '' && a.length < 50){
               personalMovieDB.movies[a]=b;
               console.log('done');
           }
                else {
                    console.log('error');
                    i--;
                }
        }

console.log(personalMovieDB);