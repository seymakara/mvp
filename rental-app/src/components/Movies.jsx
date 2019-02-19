import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import MoviesTable from './MoviesTable'
import { Pagination, paginate } from './Pagination';
import Categories from './Categories'
import { getGenres } from '../services/fakeGenreService';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Movies extends Component {
  state = {
    movies: [],
    types: [],
    selectedType: '',
    itemsPerPage: 4,
    currentPage: 1,
    searchQuery: "",
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

  handlePageChange = (page) => {
    this.setState({
      currentPage: page
    })
  }

  handleTypeSelect = (type) => {
    this.setState({
      selectedType: type,
      currentPage: 1
    })
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedType: '', currentPage: 1 })
  }

  handleFilteredData = () => {
    const { currentPage, itemsPerPage, movies: allMovies, selectedType, searchQuery } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter(movie =>
        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
    } else if (selectedType && selectedType._id) {
      filtered = allMovies.filter(movie => movie.genre._id === selectedType._id)
    }
    const movies = paginate(filtered, currentPage, itemsPerPage);
    return { filteredCount: filtered.length, data: movies };

  }

  componentDidMount = () => {
    const types = [{ name: 'All Genres' }, ...getGenres()]
    this.setState({ movies: getMovies(), types })
  }

  render() {
    const { length: movieCount } = this.state.movies;
    const { currentPage, itemsPerPage, searchQuery } = this.state;
    if (movieCount === 0) {
      return <p>There are no movies left to rent!</p>
    }

    const { filteredCount, data: movies } = this.handleFilteredData()

    return (
      <div className='row'>
        <div className="col-3">
          <Categories
            types={this.state.types}
            selectedType={this.state.selectedType}
            onSelect={this.handleTypeSelect} />
        </div>
        <div className="col">
          <Link
            to='/movies/new'
            className='btn btn-primary'
            style={{ marginBottom: 20 }}
          >
            Add
          </Link>
          <SearchBar value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            handleDelete={this.handleDelete}
            handleLike={this.handleLike} />
          <Pagination
            itemsCount={filteredCount}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />

        </div>
      </div>

    );
  }
}

export default Movies;