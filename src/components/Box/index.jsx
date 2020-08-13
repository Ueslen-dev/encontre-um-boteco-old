import React from 'react'

import { Box } from './styles'

const BoxContain = (props) => {
    return(
        <Box>
            {props.children}
        </Box>
    )
}

export default BoxContain