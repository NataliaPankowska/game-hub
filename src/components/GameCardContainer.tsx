import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Pops {
    children: ReactNode
}

const GameCardContainer = ({children}: Pops) => {
  return (
    <>
    <Box overflow='hidden'  borderRadius={10}>
        {children}
    </Box>
    </>
  )
}

export default GameCardContainer