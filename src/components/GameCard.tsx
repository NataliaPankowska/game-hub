
import { Card, CardHeader, CardBody, CardFooter, Image, Heading } from '@chakra-ui/react'
import { Game } from '../assets/hooks/useGame'

interface Props {
 game: Game,
}

const GameCard = ({game}: Props) => {
  return (
   <>
   <Card overflow='hidden'>
   <Image src={game.background_image}  />
    <CardBody>
        
      
        
          <Heading fontSize='xl'>{game.name}</Heading>
       

        
    </CardBody>
   </Card>
   </>
  )
}

export default GameCard