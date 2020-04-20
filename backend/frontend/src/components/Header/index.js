import React, { Component } from 'react';
import { FiPower } from 'react-icons/fi';

// Style
import { HeaderContainer } from './styles';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <nav>
          <a href="/movies">Movies</a>
          <a href="/api/logout">
            <FiPower size={40} color="#e02041" />
          </a>
        </nav>
      </HeaderContainer>
    );
  }
}

export default Header;
