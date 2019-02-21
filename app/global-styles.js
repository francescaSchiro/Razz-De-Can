import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --white: #ffffff;
  --black: #000000;
  --red: #b30000;
  --darkRed: #800000;
  --blue: 	#00b3b3;
  --darkBlue: #008080;
}
  html,
  body {
    ::-webkit-scrollbar {
    display: none;
  }

    box-sizing: border-box;
    min-height: 100vh;
    width: 100vw;
    margin:0; padding:0;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  /* body.fontLoaded {
    font-family: 'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } */

  #app {
    background-color: var(--white);
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
    /* font-weight:900; */
    color: var(--red);
    /* border-radius: 10px; */
    @media (max-width: 700px) {
      color:var(--red);
  }
  }

  i {
    height: fit-content;
  }

  /* .win {
    background-color: green!important;
    cursor: not-allowed;
    ::after {
        content:  '🙂';
        position: absolute;
        right:0;
        bottom: 10%;
        font-size: 1.5rem;
        color: white;
      }
  }

  .loss {    
    background-color: red!important;
    cursor: not-allowed;
    ::after {
        content:  '☹️';
        position: absolute;
        right:0;
        bottom: 10%;
        font-size: 1.5rem;
        color: white;
      }
  } */


/* @font-face {
  font-family:  'Nunito', sans-serif;
  src: url("https://fonts.googleapis.com/css?family=Nunito:300,400,600");
} */


`;

export default GlobalStyle;
