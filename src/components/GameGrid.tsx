
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../assets/hooks/useGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../assets/hooks/useGenre';

interface Props {
  selectedGenres: Genre | null
}


const GameGrid = ({selectedGenres}: Props) => {

const {data, error, isLoading} = useGame(selectedGenres);
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