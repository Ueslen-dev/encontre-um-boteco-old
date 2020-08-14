import React from 'react'

import { Button } from './styles'

const SubmitButton = (props) => {
    return(
        <Button type={props.type}>{props.name}</Button>
    )
}

export default SubmitButton