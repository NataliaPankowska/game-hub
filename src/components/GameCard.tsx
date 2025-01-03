
import { Card,  CardBody, Image, Heading,  HStack } from '@chakra-ui/react'
import { Game } from '../hooks/useGame'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import cropImageUrl from '../services/image-url'
import Emojis from './Emojis'

interface Props {
 game: Game,
}

const GameCard = ({game}: Props) => {
  return (
   <>
   <Card >
   <Image src={cropImageUrl(game.background_image)}  />
    <CardBody>
        
      
        
          <Heading fontSize='xl'>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic} />
          </HStack>
          <Emojis rating={game.rating_top}/>
    </CardBody>
   </Card>
   </>
  )
}

export default GameCard