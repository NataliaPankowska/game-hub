
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text } from '@chakra-ui/react'
import { Game } from '../assets/hooks/useGame'
import PlatformIconList from './PlatformIconList'

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
       
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        
    </CardBody>
   </Card>
   </>
  )
}

export default GameCard