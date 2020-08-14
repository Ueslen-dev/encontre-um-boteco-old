import styled from 'styled-components'

export const Boxpub = styled.div`
    background: var(--text-white);
    padding: 3rem;
    border-radius: 0.9rem;
    margin-top: 5rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #photo{
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        object-fit: cover;
    }
    @media (min-width:700px){
        display: grid;
        grid-template-columns: 1fr 3fr 2fr;
        grid-gap: 2rem;
    }
`;

export const Boxpubcontain = styled.div`
    padding: 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        font-size: 1.8rem;
        margin-bottom: 0.6rem;
        color: var(--text-yellow);
    }
    h3{
        font: 600 1.4rem 'Montserrat', sans-serif;
        margin-bottom: 0.6rem;
        color: var( --text-secondary);
    }
    p{
        margin-top: 0.7rem;
        font-size: 1.6rem;
        strong{
            color: var(--text-yellow);
        }
    }
    @media (min-width:700px){
        align-items: start;
    }
`;

export const Likepub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-top: 2rem;
    img{
        width: 3.5rem;
        padding-right: 1rem;
    }
`;

export const Boxpubbutton = styled.div`
    width: 100%;
    a{
        width: 100%;
        height: 7rem;
        border-radius: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font: 800 1.4rem 'Montserrat', sans-serif;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        transition: background-color 0.2s;
        color: var(--text-white);
        cursor: pointer;
        margin-top: 1rem;

    }

    a:first-child{
        background-color: var(--bg-button-purple);
        &:hover{
            background-color: var(--bg-button-hover-purple);
        }
    }
    a:last-child{
        background-color: var(--bg-button-green);
        &:hover{
            background-color: var(--bg-button-hover-green);
        }
    }
`;