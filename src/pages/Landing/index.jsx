import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Container from '../../components/Container'
import Logo from '../../assets/icons/logo.svg';
import { Modal, ModalBody } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
// import ModalBody from "react-bootstrap/ModalBody";

import "bootstrap/dist/css/bootstrap.min.css";
import { Main} from './styles';



function Landing(){
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        
        <Main id="teste">
            <Container>
                <img src={Logo} alt="Logo da plataforma"/>
                <div className="containButtons">
                    <a onClick={handleShow}>encontrar boteco</a>
                    <Link to="/cadastrar">cadastrar boteco</Link>
                </div>
                <p>Total de <strong>325 botecos</strong> cadastrados</p>
                
                
            </Container>
            <Modal

                show={show}
                centered
                aria-labelledby="teste"
                onHide={handleClose}
            >
                <ModalBody>asdfasdf</ModalBody>
            </Modal>
        </Main>
  

        
    )
}

export default Landing