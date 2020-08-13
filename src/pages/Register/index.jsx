import React from 'react'

import PageHeader from '../../components/Header'
import BoxContain from '../../components/Box'
import Container from '../../components/Container'
import InputForm from '../../components/Input'
import SelectForm from '../../components/Select'
import IconFile from '../../assets/icons/file.svg'

import { Contain, Form} from './styles'

function Register(){
    return(
        <Contain>
            <PageHeader title="Preencha o formulário abaixo para cadastrar um novo boteco"/>
            <BoxContain>
                <Container>
                    <Form>
                        <InputForm
                            inputType="text"
                            inputName="Nome do boteco"
                        />
                        <div className="containInput-1">
                            <InputForm
                                inputType="text"
                                inputName="Whatsapp"
                            />
                            <InputForm
                                inputType="text"
                                inputName="Instagram"
                            />
                        </div>
                        <div className="containInput-2">
                            <SelectForm
                                selectName="estado"
                                nameOptionDisabled="Estado"
                                options={[
                                    {value: 'BA', label: 'Bahia'},
                                    {value: 'SP', label: 'São Paulo'}
                                ]}
                            >
                            </SelectForm>
                            <SelectForm
                                selectName="cidade"
                                nameOptionDisabled="Cidade"
                                options={[
                                    {value: 'SSA', label: 'Salvador'},
                                    {value: 'SA', label: 'Santos'}
                                ]}
                            >
                            </SelectForm>
                        </div>
                        <InputForm
                            inputType="text"
                            inputName="Endereço"
                        />
                        <InputForm
                            inputType="text"
                            inputName="Ponto de referência"
                        />
                        <InputForm
                            inputType="file"
                            inputName="Ponto de referência"
                        />
                        <div className="fileUploadOverlay">
                            <img src={IconFile} alt="Icone arquivo"/>
                            <span>Envie uma foto do boteco</span>
                        </div>
                        <button type="submit">cadastrar boteco</button>
                    </Form>
                </Container>
            </BoxContain>
        </Contain>
    )
}

export default Register