import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471856",
    title: "Star Wars",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    myScore: 6,
    imdbScore: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471857",
    title: "Avatar",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    myScore: 5,
    imdbScore: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471858",
    title: "Bird Box",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    myScore: 8,
    imdbScore: 3.5
  }
];

export function getWatchList() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.myScore = movie.myScore;
  movieInDb.imdbScore = movie.imdbScore;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
