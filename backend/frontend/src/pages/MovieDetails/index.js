import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../../actions';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Components
import Circle from '../../components/Circle';
import Player from './components/Player';
import Rating from './components/Rating';

// Style
import { MovieDetailsContainer } from './styles';

// Formaters
import { formatDate, formatTime } from '../../utils/formaters';

// Translates
import { translateLanguage, translateStatus } from '../../utils/translates';

class MovieDetails extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieDetails(id);
  }

  render() {
    const {
      title,
      release_date,
      genres,
      overview,
      vote_average,
      poster_path,
      status,
      spoken_languages,
      runtime,
      revenue,
      budget,
      videos,
    } = this.props.details;

    // Image
    const plot = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : undefined;

    // Formating date
    const formatedReleaseDate = formatDate(release_date);

    return (
      <MovieDetailsContainer>
        <section className="button-container">
          <Link to={'/profile'} className="button">
            <FaArrowLeft size={22} />
            Voltar
          </Link>
        </section>
        <section id="movie-details">
          <div className="header">
            <span className="titles">{title}</span>
            <Rating movieID={this.props.match.params.id} />
          </div>
          <div className="movie-details-container">
            <div className="movie-details">
              <span className="titles">Sinopse</span>
              <hr />
              <p className="description">{overview}</p>
              <div className="information-container">
                <span className="titles">Informações</span>
                <hr />
                <div className="information">
                  <div>
                    <span className="titles">Situação</span>
                    <br />
                    <p className="description">{translateStatus(status)}</p>
                  </div>
                  <div>
                    <span className="titles">Idioma</span>
                    <br />
                    <p className="description">
                      {spoken_languages != undefined &&
                      spoken_languages.length > 0
                        ? translateLanguage(spoken_languages[0].name)
                        : '-'}
                    </p>
                  </div>
                  <div>
                    <span className="titles">Duração</span>
                    <br />
                    <p className="description">{formatTime(runtime)}</p>
                  </div>
                  <div>
                    <span className="titles">Orçamento</span>
                    <br />
                    <p className="description">
                      {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(Number(budget))}
                    </p>
                  </div>
                  <div>
                    <span className="titles">Receita</span>
                    <br />
                    <p className="description">
                      {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(Number(revenue))}
                    </p>
                  </div>
                  <div>
                    <span className="titles">Lucro</span>
                    <br />
                    <p className="description">
                      {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(Number(revenue - budget))}
                    </p>
                  </div>
                </div>
                <div className="details">
                  <div>
                    {genres
                      ? genres.map((g) => (
                          <span key={g.id} className="genres">
                            {g.name}
                          </span>
                        ))
                      : undefined}
                  </div>
                  <div>
                    <Circle big={true}>{`${vote_average * 10}` + '%'}</Circle>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-container">
              {plot ? <img src={plot} /> : undefined}
            </div>
          </div>
        </section>
        <section id="player">
          {videos != undefined && videos.results.length > 0 ? (
            <Player videoId={videos.results[0].key} />
          ) : undefined}
        </section>
      </MovieDetailsContainer>
    );
  }
}

function mapStateToProps(state) {
  return { details: state.details };
}

export default connect(mapStateToProps, { fetchMovieDetails })(MovieDetails);
