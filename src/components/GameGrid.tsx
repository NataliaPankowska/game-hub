
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../assets/hooks/useGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';



const GameGrid = () => {

const {games, error, isLoading} = useGame();
const skeletons = [1,2,3,4,5,6];
// console.log(games[9].image_background)
  return (
    <>
    {error && <Text > {error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg:3, xl: 4}} spacing={10}>
    {isLoading && skeletons.map(skel => <GameCardSkeleton key={skel} />)}
    {games.map((game) => <GameCard key= {game.id} game={game}/>)}
    
    </SimpleGrid>
    </>
  )
}

export default GameGrid