import React, { Component } from 'react';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class ItemForm extends Component {
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

    const movieId = this.props.match.params.genreId
    if (movieId === 'new') return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace('/not-found')
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
    return (<h1>{this.state.title}</h1>);
  }
}

export default ItemForm;