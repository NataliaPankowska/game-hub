
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame, { Platform } from '../hooks/useGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenre';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery

}


const GameGrid = ({gameQuery}: Props) => {

const {data, error, isLoading} = useGame(gameQuery);
const skeletons = [1,2,3,4,5,6];
// console.log(games[9].image_background)
  return (
    <>
    {error && <Text > {error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg:3, xl: 4}} spacing={3}>
    {isLoading && skeletons.map(skel => 
    <GameCardContainer key={skel} >
      <GameCardSkeleton />
    </GameCardContainer>
    )}
    {data.map((game) => 
    <GameCardContainer key= {game.id}>
      <GameCard  game={game}/>
    </GameCardContainer>
    )}
    
    </SimpleGrid>
    </>
  )
}

export default GameGrid