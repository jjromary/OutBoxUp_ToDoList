import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-950: #181820;
        --gray-750: #414052;
        --gray-50: #F5F5F6;
        --purple: #AC6DDE;  
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      @media (max-width: 1080px) {
          font-size: 93.75%; //15px
      }

      @media (max-width: 720px) {
          font-size: 87.5%; //14px
      }
  }

  body {
      background: var(--gray-950);
      -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: var(--gray-50);
  }

  h1, h2, h3, h4, h5, h6, strong {
        color: var(--gray-50);
      font-weight: 600;
  }

  button {
      cursor: pointer;
  }


  
`;
