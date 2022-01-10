import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  height: 17.25rem;
  margin-top: 3.75rem;
  background: var(--backgroundCard);
  display: flex;
  align-items: center;

 
  
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--gray-850);
    border-radius: 1.25rem 1.25rem 0 0;

    .title {
      display: flex;
      align-items: center;
      margin: 1.25rem;

      span {
        margin-left: 1.25rem;
      }
    }

    .moreOptions {
      margin: 1.25rem;
    }
  }

  .description {
    background: var(--gray-900);
    span {
      margin: 1.25rem;
      display: flex;
      justify-content: center;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--gray-850);
    border-radius: 0 0 1.25rem 1.25rem;

    span {
      margin: 0 auto;
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
      font-weight: 300;
    }
  }

  @media (max-width: 375px){
    margin-top: 3.75rem;
  }
  
`;
