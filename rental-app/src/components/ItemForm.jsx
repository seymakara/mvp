import React, { Component } from 'react';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import FormTemplate from './FormTemplate';

class ItemForm extends FormTemplate {
  state = {
    data: {
      title: '',
      genreId: '',
      numberInStock: '',
      dailyRentalRate: '',
    },
    genres: []
  }
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres })

    const movieId = this.props.match.params.id
    if (movieId === 'new') return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace('/not-found');

    let data = {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    }
    this.setState({ data: data })
  }

  handleSubmit = () => {
    saveMovie(this.state.data)
    this.props.history.push('/movies')
  }


  render() {
    return (
      <div>
        <h1>Add Movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genreId', 'Genre', this.state.genres)}
          {this.renderInput('numberInStock', 'Number In Stock', 'number')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default ItemForm;