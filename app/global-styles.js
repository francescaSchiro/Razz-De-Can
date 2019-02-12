import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    margin:0; padding:0;
    height: 100%;
    width: 100%;
    font-size: 16px;
  }

  body {
    font-family: 'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  /* body.fontLoaded {
    font-family: 'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } */

  #app {
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  button {
    font-family: inherit;
  }


  .navLinkActive {
    font-weight:900;
    color: red;
    border-radius: 10px;
    border-bottom: 2px solid red;
    background-color:white;
  }

  /* @font-face {
    font-family:  'Nunito', sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Nunito:300,400,600");
  } */


`;

export default GlobalStyle;
