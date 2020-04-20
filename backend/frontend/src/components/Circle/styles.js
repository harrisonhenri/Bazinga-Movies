import styled from 'styled-components';

export const CircleContainer = styled.div`
  width: ${(props) => `${props.big ? 134 : 90}px`};
  height: ${(props) => `${props.big ? 134 : 90}px`};
  background-color: #116193;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;

  div {
    width: ${(props) => `${props.big ? 124 : 84}px`};
    height: ${(props) => `${props.big ? 124 : 84}px`};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: ${(props) => `${props.big ? 8 : 5}px`};
    border-style: solid;
    border-color: #05c4ce;
  }

  span {
    font-size: ${(props) => `${props.big ? 40 : 23}px`};
    color: #05c4ce;
    font-family: Abel, sans-serif;
    font-weight: 100;
    padding: 15px 35px;
  }
`;
