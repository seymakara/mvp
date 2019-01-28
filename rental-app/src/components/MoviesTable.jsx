import React, { Component } from 'react';
import Like from './Like';

const MovieTable = (props) => {
  const { movies, handleLike, handleDelete } = props
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => {
          return (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
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