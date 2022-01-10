import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 11rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .diviser {
    width: 100%;
    border: 0;
    border-top: 1px solid var(--gray-50);
  }

  span {
    margin-top: 1.25rem;
    color: var(--gray-50);
  }
`;
