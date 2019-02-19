import React from 'react';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import FormTemplate from './FormTemplate';
import Joi from 'joi-browser';

class ItemForm extends FormTemplate {
  state = {
    data: {
      title: '',
      genreId: '',
      myScore: '',
      imdbScore: '',
    },
    genres: [],
    errors: {}
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    myScore: Joi.number().required().min(0).max(10).label('My Score'),
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
      myScore: movie.myScore,
      imdbScore: movie.imdbScore,
    }
    this.setState({ data: data })
  }

  doSubmit = () => {
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
          {this.renderInput('myScore', 'My Score', 'number')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default ItemForm;