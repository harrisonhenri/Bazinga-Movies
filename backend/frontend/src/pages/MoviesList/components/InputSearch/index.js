import React, { Component } from 'react';

// Style
import { InputSearchContainer } from './styles';

class InputSearch extends Component {
  render() {
    return (
      <InputSearchContainer>
        <input
          type="text"
          placeholder={this.props.placeholder}
          onBlur={this.props.onBlur}
          onKeyDown={this.props.onKeyDown}
        />
      </InputSearchContainer>
    );
  }
}

export default InputSearch;
