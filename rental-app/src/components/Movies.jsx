import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import Like from './utils/Like';

class Movies extends Component {
  state = {
    movies: getMovies()
  }

  handleDelete = (movie) => {
    let movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({
      movies
    })
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState(
      { movies }
    )
  }

  render() {
    let { length: movieCount } = this.state.movies;
    if (movieCount === 0) {
      return <p>There are no movies left to rent!</p>
    }
    return (
      <React.Fragment>
        <p>There are {movieCount} movies in the stock!</p>
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
            {this.state.movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      handleLike={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </React.Fragment>

    );
  }
}

export default Movies;