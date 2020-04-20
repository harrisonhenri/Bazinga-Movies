import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FaStar } from 'react-icons/fa';
import { connect } from 'react-redux';
import { submitRating, getRating } from '../../../../actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Rating extends React.Component {
  constructor() {
    super();

    this.state = {
      voted: false,
      rating: 1,
      movies: [],
    };
  }

  componentDidMount() {
    this.props.getRating();
  }

  componentWillUpdate(nextProps) {
    if (
      nextProps.moviesUser != [] &&
      this.state.movies != nextProps.moviesUser
    ) {
      this.setState({
        movies: nextProps.moviesUser,
      });

      if (
        nextProps.moviesUser.filter((item) => item === this.props.movieID)
          .length !== 0
      ) {
        this.setState({ voted: true });
        toast.warn('Você já cadastrou nota para esse filme!', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      }
    }
  }

  onStarClick(nextValue, prevValue, name) {
    if (this.state.voted) {
      return;
    }
    try {
      this.props.submitRating({
        movieID: this.props.movieID,
        rating: nextValue,
      });

      this.setState({ voted: true });
      this.setState({ rating: nextValue });

      toast.success('Nota cadastrada com sucesso!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    } catch (err) {
      toast.error('Não foi possível cadastrar a nota!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <StarRatingComponent
          name="rate"
          starCount={5}
          value={rating}
          renderStarIcon={() => <FaStar fontSize={30}></FaStar>}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps({ moviesUser }) {
  return { moviesUser };
}

export default connect(mapStateToProps, { submitRating, getRating })(Rating);
