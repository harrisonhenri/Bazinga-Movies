import styled from 'styled-components';

export const PaginationContainer = styled.section`
  margin: 64px 0;

  nav {
    background: none;
    box-shadow: none;
  }

  nav ul a:hover {
    background: none;
  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav ul li {
    margin: 0 10px;
  }

  span {
    transition: all 0.2s;
  }

  span:hover {
    transform: scale(2);
  }
`;
