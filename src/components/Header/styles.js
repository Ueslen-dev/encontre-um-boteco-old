import styled from 'styled-components'

export const Header = styled.header`
    width: 100vw;
    background: var(--bg-button-secondary);
    padding: 5rem 0 12rem;
    img:first-child{
        width: 10%;
    }
    .containHeader{
        display: flex;
        flex-direction: column;
        align-items:center;
        h2{
            margin-top: 5rem;
            font-size: 2rem;
            width: 80%;
        }
        img{
            display:none;
        }
    }
    @media(min-width:700px){
        img:first-child{
            width: 8%;
        }
        .containHeader{
            flex-direction: row;
            align-items:center;
            justify-content: space-between;
            h2{
                width: 50%;
            }
            img{
                display:block;
                width: 20%;
            }
        }
    }
`;