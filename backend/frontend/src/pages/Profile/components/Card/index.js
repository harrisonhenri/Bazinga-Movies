import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Formaters
import { formatDate } from '../../../../utils/formaters';

// Components
import Circle from '../../../../components/Circle';

// Style
import { CardContainer } from './styles';

class Card extends Component {
  render() {
    const {
      id,
      title,
      release_date,
      genre_ids,
      overview,
      vote_average,
      poster_path,
    } = this.props.movieData;

    // Formating date
    const formatedReleaseDate = formatDate(release_date);

    // Image
    const plot = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : undefined;

    return (
      <Link to={`/movie/${id}`}>
        <CardContainer>
          <div className="image-container">
            {plot ? <img src={plot} /> : undefined}
          </div>
          <div className="card-info-container">
            <div className="header">
              <span>{title}</span>
            </div>
            <div className="circle-container">
              <Circle>{`${vote_average * 10}` + '%'}</Circle>
            </div>
            <div className="details-container">
              <p className="dates">{formatedReleaseDate}</p>
              <div className="details">
                <span className="description">
                  {overview ? overview : undefined}
                </span>
              </div>
            </div>
          </div>
        </CardContainer>
      </Link>
    );
  }
}

export default Card;
