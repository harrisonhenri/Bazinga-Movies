import styled from 'styled-components';

export const MovieDetailsContainer = styled.main`
  .button-container {
    justify-content: flex-start;
    margin: 40px 0;
  }

  .header {
    width: 100%;
    height: 82px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #d9d9d9;
  }

  .header span {
    font-size: 4.5rem;
  }

  .movie-details-container {
    display: flex;
    background-color: #e6e6e6;
    justify-content: space-between;
  }

  .movie-details-container .movie-details {
    padding-top: 25px;
    margin: 0 30px;
  }

  .movie-details-container .movie-details p {
    padding-top: 10px;
  }

  .movie-details-container .movie-details .information-container {
    padding-top: 50px;
  }

  .movie-details-container .movie-details .information {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
  }

  .movie-details-container .movie-details .information div {
    margin: 0 2px;
  }

  .movie-details-container .movie-details .information span {
    font-size: 2.5rem;
  }

  .movie-details-container .movie-details .information p {
    font-size: 1.6rem;
  }

  .movie-details-container .movie-details .details {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
  }

  .movie-details-container .movie-details .details > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .movie-details-container .image-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .movie-details-container .image-container img {
    height: 100%;
  }

  section#player {
    padding-top: 40px;
  }

  @media (max-width: 980px) {
    .movie-details-container {
      flex-wrap: wrap;
      justify-content: center;
    }

    .movie-details-container .image-container {
      order: -1;
    }

    img {
      order: -1;
      width: 50%;
      height: 20%;
    }
  }
`;
