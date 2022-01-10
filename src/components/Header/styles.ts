import styled from "styled-components";

export const Container = styled.header`
  margin-top: 3.75rem;
  background: var(--header);
  
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;

    span {
      font-family: Inter 400;
      font-size: 1.6rem;
      margin-left: 1.25rem;
    }
  }

  button {
    font-size: 1rem;
    color: var(--gray-50);
    background: var(--purple);
    border: 0;
    border-radius: 1.25rem;
    width: 12rem;
    height: 3rem;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
