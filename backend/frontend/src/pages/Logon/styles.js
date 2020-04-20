import styled from 'styled-components';

export const LoginContainer = styled.main`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  section.form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    background: #f0f0f5;
    padding: 0 62px 62px 62px;
    border-radius: 8px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  }

  section.form p {
    font-size: 32px;
    margin: 0 0 32px 0;
  }
`;
