import React, { Component } from 'react';

import { CircleContainer } from './styles';

class Circle extends Component {
  render() {
    return (
      <CircleContainer big={this.props.big}>
        <div>
          <span>{this.props.children}</span>
        </div>
      </CircleContainer>
    );
  }
}

export default Circle;
