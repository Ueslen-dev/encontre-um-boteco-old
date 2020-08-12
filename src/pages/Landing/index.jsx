import React from 'react'
import { Link } from 'react-router-dom'
import { Main} from './styles';
import Container from '../../components/Container'

import Logo from '../../assets/icons/logo.svg';

function Landing(){
    return(
        <Main>
            <Container>
                <img src={Logo} alt="Logo da plataforma"/>
                <div className="containButtons">
                    <Link to="/botecos">encontrar boteco</Link>
                    <Link to="/cadastrar">cadastrar boteco</Link>
                </div>
                <p>Total de <strong>325 botecos</strong> cadastrados</p>
                
                
            </Container>
        </Main>

    )
}

export default Landing