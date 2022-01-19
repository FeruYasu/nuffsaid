import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font: 400 16px 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  h5 {
    font-size: 1.4rem;
  }

  h6 {
    font-size: 1.2rem;
  }

  p, span, a {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      &:hover {
        filter: brightness(1.0);
      }
    }
  }
  
  `;
