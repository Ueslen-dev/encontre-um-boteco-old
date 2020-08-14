import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        --bg-button-cinza: #020200;
        --bg-button-primary: #F1B916;
        --bg-button-secondary: #FCC21A;
        --bg-button-green: #50CA89;
        --bg-button-purple: #F5436F;
        --bg-button-hover-primary: #101002;
        --bg-button-hover-secondary: #CC9C0F;
        --bg-button-hover-green: #36AF6F;
        --bg-button-hover-purple: #D12852;
        --bg-box: #EEEEEE;
        --text-white: #fff;
        --text-secondary: #858585;
        --text-yellow: #DBA205;
        font-size: 60%;
    }
    #root{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        height: 100vh;
    }
    *, html, body, #root{
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }
    body,
    input,
    button,
    textarea{
        font: 500 1.6rem Poppins;
        font-family: 'Montserrat', sans-serif;
    }
    img{
        width: 100%;
    }
    @media (min-width: 700px){
        #root{
          font-size: 62.5%;
        }
    }
`;