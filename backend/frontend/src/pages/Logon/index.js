import React, { Component } from 'react';

// Style
import { LoginContainer } from './styles';

// Assets
import logoImg from '../../assets/logo.svg';

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <section className="form">
          <img src={logoImg} alt="Bazinga Movies" />
          <p>Faça seu logon</p>
          <a className="button" href="/auth/google">
            Entrar
          </a>
        </section>
      </LoginContainer>
    );
  }
}

export default Login;
