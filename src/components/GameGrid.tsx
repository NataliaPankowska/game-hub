
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../assets/hooks/useGame';
import GameCard from './GameCard';



const GameGrid = () => {

const {games, error} = useGame()
// console.log(games[9].image_background)
  return (
    <>
    {error && <Text > {error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg:3, xl: 4}} spacing={10}>
    {games.map((game) => <GameCard key= {game.id} game={game}/>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid