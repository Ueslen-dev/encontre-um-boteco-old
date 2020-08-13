import React from 'react'

import { Select } from './styles'

const SelectForm = ({selectName, options, nameOptionDisabled, ...rest}) => {
    return(
        <Select name={selectName} {...rest}>
            <option value="" disabled selected hidden>{nameOptionDisabled}</option>
            {options.map(option => {
                return <option key={option.value} value={option.value}>{option.label}</option>
            })}
        </Select>
    )
}

export default SelectForm