import React from 'react'

import { Input } from './styles'

const InputForm = ({inputType, inputName, ...rest}) => {
    return(
        <Input type={inputType} placeholder={inputName} {...rest}/>
    )
}

export default InputForm