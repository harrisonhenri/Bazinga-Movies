import React from 'react';
import { Skeleton } from 'react-loading-skeleton-placeholders';

// Style
import { LoaderCardContainer } from './styles';

const LoaderCard = () => {
  return (
    <LoaderCardContainer>
      <Skeleton skull={true} direction={'row'} amount={5} />
    </LoaderCardContainer>
  );
};

export default LoaderCard;
