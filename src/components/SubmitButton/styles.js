import styled from 'styled-components'

export const Button = styled.button`
    width: 100%;
    height: 7rem;
    border-radius: 0.9rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font: 800 1.4rem 'Montserrat', sans-serif;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    transition: background-color 0.2s;
    color: var(--bg-button-cinza);
    background-color: var(--bg-button-secondary);
    cursor: pointer;
    &:hover{
        background: var(--bg-button-hover-secondary);
    }
`;