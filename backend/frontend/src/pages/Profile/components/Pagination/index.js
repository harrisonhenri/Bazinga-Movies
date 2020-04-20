import React from 'react';

// Components
import Circle from '../../../../components/Circle';

// Style
import { PaginationContainer } from './styles';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={() => {
                  paginate(number);
                }}
              >
                <Circle>{number}</Circle>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </PaginationContainer>
  );
};

export default Pagination;
