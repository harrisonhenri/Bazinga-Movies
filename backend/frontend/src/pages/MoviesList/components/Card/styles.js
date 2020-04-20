import styled from 'styled-components';

export const CardContainer = styled.section`
  display: flex;
  margin: 40px auto;

  .image-container {
    width: 30%;
  }

  .image-container img {
    height: 100%;
  }

  .card-info-container {
    background-color: #e6e6e6;
    width: 100%;
  }

  .card-info-container .header {
    display: flex;
    align-items: center;
    background-color: #01579b;
    min-height: 80px;
    width: 100%;
  }

  .card-info-container .header span {
    padding: 20px 0 0 130px;
    color: #40c4ff;
    font-size: 4.5rem;
  }

  .card-info-container .circle-container {
    margin-top: -50px;
    margin-left: 20px;
  }

  .card-info-container .details-container {
    padding: 0 30px;
    margin-top: -30px;
  }

  .card-info-container .details-container .dates {
    padding-left: 100px;
  }

  .card-info-container .details-container .details {
    padding-top: 40px;
  }

  .card-info-container .details-container .details .genres-container {
    padding-top: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    .image-container {
      width: 40%;
    }
  }

  @media (max-width: 964px) {
    .image-container {
      width: 70%;
    }
  }

  @media (max-width: 684px) {
    .image-container {
      width: 50%;
    }

    & {
      flex-direction: column;
      background-color: #e6e6e6;
      align-items: center;
    }
  }
`;
