import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');;
    @import url('https://fonts.googleapis.com/css?family=Abel|Lato&display=swap');;

    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    html,
    body {
      height: 100vh;
      background: #f0f0f5;
      -webkit-font-smoothing: antialiased;
    }

    .genres { 
      border: 1px solid #01579b;
      border-radius: 16px;
      font-size: 1.5rem;
      padding: 4px 10px;
      margin: 5px;
      background-color: #fff;
      color: #01579b;
    }

    .titles {
      color: #01579b;
      font-size: 3rem;
    }

    hr {
      border: 1px solid #40c4ff;
    }

    .dates {
      color: #999999;
      font-size: 2rem;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
    }
    
    nav a {
      font-size: 50px;
      color: #40c4ff;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    li {
      list-style: none;
    }

    .description {
      color: #666666;
      font-size: 1.8rem;
      font-weight: 600;
    }

    img {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }

    .button {
      width: 100%;
      height: 60px;
      background: #e02041;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;
      cursor: pointer;
    }

    .button svg {
      margin-right: 8px;
    }  

    .button-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .button-container .button {
      width: 200px;
      margin: 0;
    }

    .Toastify__toast-body { font-size: 2.5rem; }

    @media (max-width: 768px) {
      html {
        font-size: 50%;
      }
    }

`;

export default GlobalStyles;
