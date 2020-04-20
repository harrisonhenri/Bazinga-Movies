import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../actions';
import { Link } from 'react-router-dom';
import { MdYoutubeSearchedFor } from 'react-icons/md';

// Components
import Card from './components/Card';
import Pagination from './components/Pagination';

// Style
import { MoviesListProfileContainer } from './styles';

class MoviesListProfile extends Component {
  constructor() {
    super();

    this.pagination = 5;

    this.state = {
      movieData: {},
      currentPage: 1,
      indexOfLastPost: this.pagination,
      indexOfFirstPost: 0,
      actualMovieData: {},
    };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.profile != [] && this.state.movieData !== nextProps.profile) {
      this.setState({
        movieData: nextProps.profile,
        currentPage: 1,
        indexOfLastPost: this.pagination,
        indexOfFirstPost: 0,
        actualMovieData:
          Object.keys(nextProps.profile).length != 0
            ? nextProps.profile.slice(0, this.pagination)
            : {},
      });
    }
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

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
          <section className="button-container">
            <Link to={'/movies'} className="button">
              <MdYoutubeSearchedFor size={22} />
              Buscar novos filmes
            </Link>
          </section>
          <span className="titles">Recomendados</span>
          {this.state.actualMovieData.map((movie) => (
            <Card key={movie.id} movieData={movie} />
          ))}
          <Pagination
            postsPerPage={5}
            totalPosts={this.state.movieData.length}
            paginate={this.paginate}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <section className="button-container">
            <Link to={'/movies'} className="button">
              <MdYoutubeSearchedFor size={22} />
              Buscar novos filmes
            </Link>
          </section>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <MoviesListProfileContainer>
        {this.renderContent()}
      </MoviesListProfileContainer>
    );
  }
}

function mapStateToProps(state) {
  return { profile: state.profile };
}

export default connect(mapStateToProps, {
  fetchProfile,
})(MoviesListProfile);
