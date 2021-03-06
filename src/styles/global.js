import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    height: 100vh;
    font-size: 10px;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: #fafafa;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    p {
      font-size: 1.6rem;
    }

    .container {
      width: 100%;
      margin: 0 auto;
      max-width: 98rem;
      padding: 0 1.5rem;
    }
  }
`;
