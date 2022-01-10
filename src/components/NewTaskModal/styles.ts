import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--gray-50);
    font-size: 1.5rem;
  }

  textarea {
    width: 100%;
    padding: 1rem;
    height: 4rem;
    border-radius: 1.25rem;
    margin-top: 2.75rem;
    border: 0;
    background: #272733;
    font-weight: 400;
    font-size: 1rem;
    resize: none;

    & + textarea {
      margin-top: 1rem;
    }

    ::-webkit-textarea-placeholder{
      color: #777777;
      padding: 1rem;
    }
  }

  .description {
    height: 14.625rem;
    width: 100%;
  }
  
  button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--purple);
      color: #FFF;
      border-radius: 1.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.25rem;
      font-weight: 600;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
}
`;
