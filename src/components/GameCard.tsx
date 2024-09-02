
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text, HStack } from '@chakra-ui/react'
import { Game } from '../assets/hooks/useGame'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import cropImageUrl from '../assets/services/image-url'

interface Props {
 game: Game,
}

const GameCard = ({game}: Props) => {
  return (
   <>
   <Card overflow='hidden' width='300px' borderRadius={10}>
   <Image src={cropImageUrl(game.background_image)}  />
    <CardBody>
        
      
        
          <Heading fontSize='xl'>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic} />
          </HStack>
    </CardBody>
   </Card>
   </>
  )
}

export default GameCard