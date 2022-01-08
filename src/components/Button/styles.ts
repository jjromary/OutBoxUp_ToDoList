import styled from "styled-components";

export const Container = styled.div`

  
button {
    font-size: 1rem;
    color: var(--gray-50);
    border: 1px solid #414052;
    border-radius: 1.25rem;
    width: 12rem;
    height: 3rem;
    background: transparent;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
