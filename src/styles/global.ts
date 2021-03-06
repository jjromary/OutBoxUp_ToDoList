import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-950: #181820;
        --gray-900:#21212B;
        --gray-850: #272733;
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

      @media (max-width: 435px) {
          font-size: 81.25%; //13px
      }

      
  }

  body {
      background: var(--gray-950);
      -webkit-font-smoothing: antialiased;
      margin-left: 1rem;
      margin-right: 1rem;
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
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.9);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    height: 597px;
    background: #21212B;
    padding: 3rem;
    position: relative;
    border-radius: 1.25rem;    
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
  }

 
  
`;
