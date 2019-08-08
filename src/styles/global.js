import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html,body, #root {
    height: 100%;
  }

  body {
    background: white;
    font-family: 'Montserrat','Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialised !important;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #0d2c5b;
  }

  ul {
    list-style: none;
  }
`;
