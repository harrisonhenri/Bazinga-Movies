import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';
import { fetchGenres } from '../../actions';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Components
import Card from './components/Card';
import InputSearch from './components/InputSearch';
import Pagination from './components/Pagination';
import LoaderCard from './components/LoaderCard';

// Style
import { MoviesListContainer } from './styles';

class MoviesList extends Component {
  constructor() {
    super();

    this.pagination = 5;

    this.state = {
      movieData: {},
      currentPage: 1,
      indexOfLastPost: this.pagination,
      indexOfFirstPost: 0,
      actualMovieData: {},
      loading: false,
    };
  }

  componentWillUpdate(nextProps) {
    if (
      nextProps.movies.data != [] &&
      this.state.movieData !== nextProps.movies
    ) {
      this.setState({
        movieData: nextProps.movies,
        currentPage: 1,
        indexOfLastPost: this.pagination,
        indexOfFirstPost: 0,
        actualMovieData:
          Object.keys(nextProps.movies).length != 0
            ? nextProps.movies.results.slice(0, this.pagination)
            : {},
      });
    }
  }

  componentDidMount() {
    this.props.fetchGenres();
  }

  handleChange = (event) => {
    this.props.fetchMovies(event.target.value);
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.props.fetchMovies(event.target.value);
    }
    this.setState({ loading: true });
  };

  setCurrentPage = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
      indexOfLastPost: pageNumber * this.pagination,
      indexOfFirstPost: pageNumber * this.pagination - this.pagination,
      actualMovieData: this.state.movieData.results.slice(
        pageNumber * this.pagination - this.pagination,
        pageNumber * this.pagination
      ),
    });
  };

  paginate = (pageNumber) => this.setCurrentPage(pageNumber);

  renderContent() {
    if (
      this.state.actualMovieData != undefined &&
      Object.keys(this.state.actualMovieData).length != 0
    ) {
      return (
        <React.Fragment>
          {this.state.actualMovieData.map((movie) => (
            <Card
              key={movie.id}
              genres={this.props.genres.genres}
              movieData={movie}
            />
          ))}
          <Pagination
            postsPerPage={5}
            totalPosts={this.state.movieData.results.length}
            paginate={this.paginate}
          />
        </React.Fragment>
      );
    } else {
      {
        return this.state.loading ? <LoaderCard /> : undefined;
      }
    }
  }

  render() {
    return (
      <MoviesListContainer>
        <section className="button-container">
          <Link to={'/profile'} className="button">
            <FaArrowLeft size={22} />
            Voltar
          </Link>
        </section>
        <InputSearch
          placeholder="Busque um filme por nome, ano ou gênero."
          onBlur={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        {this.renderContent()}
      </MoviesListContainer>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies, genres: state.genres };
}

export default connect(mapStateToProps, { fetchMovies, fetchGenres })(
  MoviesList
);
