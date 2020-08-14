import styled from 'styled-components'

export const Contain = styled.section`
    height:100vh;
`;

export const Form = styled.form`
    width:100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;

    @media (min-width:700px){
        button{
            font-size: 1.6rem;
        }
    }
`;