import React from 'react'

import PageHeader from '../../components/Header'
import PubBox from '../../components/PubBox'
import BoxContain from '../../components/Box'
import Container from '../../components/Container'
import InputForm from '../../components/Input'
import SubmitButton from '../../components/SubmitButton'


import { Contain, Form } from './styles'

function List(){
    return(
        
        <Contain>
            <PageHeader title="Veja abaixo os botecos encontrados" />
            <BoxContain>
                <Container>
                    <Form>
                        <InputForm 
                            inputType="text"
                            inputName="Buscar boteco"
                        />
                         <SubmitButton 
                            type="submit"
                            name="buscar"
                        />
                    </Form>
                    <PubBox 
                        PubImage="https://diariodesalvador.com/wp-content/uploads/2017/07/IMG_0211-1024x768.jpg"
                        PubName="Boteco do Tomé"
                        PubState="BA | Salvador"
                        PubEnd="Rua Direta de Paripe Alameda B7"
                        PubRef="Em frente a praia"
                        PubLiked="15"
                        PubInstagram="#"
                        PubWahtsapp="#"
                    />
                </Container>
            </BoxContain>
        </Contain>
    )
}

export default List