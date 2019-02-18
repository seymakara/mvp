import React from 'react';
import { Link } from 'react-router-dom';
import { getWatchList } from '../services/fakeWatchList'

const WatchList = (props) => {
  const movies = getWatchList();
  return (
    <div>
      <h1>Watchlist</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Imdb Score</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => {
            return (
              <tr key={movie._id}>
                <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
                <td>{movie.genre.name}</td>
                {/* <td>{movie.myScore}</td> */}
                <td>{movie.imdbScore}</td>
                {/* <td>
                  <Like
                    liked={movie.liked}
                  // handleLike={() => handleLike(movie)}
                  />
                </td> */}
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                  // onClick={() => handleDelete(movie)}
                  >
                    Watched
                </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WatchList;