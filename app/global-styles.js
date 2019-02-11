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
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  body.fontLoaded {
    font-family: 'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  /* @font-face {
    font-family:  'Nunito', sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Nunito:300,400,600");
  } */


`;

export default GlobalStyle;
