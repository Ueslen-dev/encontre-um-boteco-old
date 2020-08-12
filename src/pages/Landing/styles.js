import styled from 'styled-components'
import Bg from '../../assets/icons/bg.svg'

export const Main = styled.section`
    background-image: url(${Bg});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    img{
        width: 55%;
    }
    .containButtons{
        margin-top: 7rem;
        a{
            width: 100%;
            height: 7rem;
            border-radius: 0.9rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font: 800 1.6rem 'Montserrat', sans-serif;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
            transition: background-color 0.2s;
            color: var(--text-white);
        }
        a:first-child{
            
            background-color: var(--bg-button-cinza);
            margin-bottom: 1.4rem;
            &:hover{
                background-color: var(--bg-button-hover-primary);
            }
            
        }
        a:last-child{
            background-color: var(--bg-button-secondary);
            border: 4px solid var(--text-white);
            &:hover{
                background-color: var(--bg-button-hover-secondary);
            }
        }
    }
    p{
        margin-top: 10rem;
        font-size: 1.6rem;
        color: var(--bg-button-cinza);
    }

    @media(min-width:700px){
        img{
            width: 35%;
        }
        .containButtons{
            display: flex;
            justify-content: center;
            a{
                width: 30rem;
                height: 7rem; 
                margin-right: 2rem; 
            }
        }
    }
   
`;
