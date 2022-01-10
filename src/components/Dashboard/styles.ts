import styled from "styled-components";

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 3.75rem;
    
    
    button:focus{
    background: var(--gray-750);
}
    .buttonActions {
        max-width: 25.62rem;
        height: 3rem;
        margin-top: 3.75rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media (max-width: 436px){
            max-width: 100%;
        }
    }
`;
