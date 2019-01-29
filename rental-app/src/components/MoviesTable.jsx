import React, { Component } from 'react';
import Like from './Like';
import { Link } from 'react-router-dom';

const MovieTable = (props) => {
  const { movies, handleLike, handleDelete } = props
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>My Score</th>
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
              <td>{movie.myScore}</td>
              <td>{movie.imdbScore}</td>
              <td>
                <Like
                  liked={movie.liked}
                  handleLike={() => handleLike(movie)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default MovieTable;