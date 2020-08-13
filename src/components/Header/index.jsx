import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/icons/logo.svg'
import Arrow from '../../assets/icons/arrow.svg'

import Container from '../Container'
import { Header } from './styles'

const PageHeader = ({ title }) => {
    return(
        <Header>
            <Container>
                <Link to="/"><img src={Arrow} alt="Volta para home"/></Link>
                <div className="containHeader">
                    <h2>{title}</h2>
                    <img src={Logo} alt="Logo da plataforma"/>
                </div>
            </Container>
        </Header>
    )
}

export default PageHeader