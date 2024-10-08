


import './App.css'
// import GameTab from './components/GameTab'

import { Flex, Grid, GridItem,  Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import Genres from './components/Genres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGame'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: string,
  searchText: string,
}

function App() {
// const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null);
// const [selectedPlatform, setSelectedPlatform]= useState<Platform | null>(null)

const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
  <Grid padding='10px' 
  templateAreas={{base: `"nav" "main"`, lg: `"nav nav" "aside main"`}}
  templateColumns={{base: '1fr', lg: '200px 1fr'}}
  >
    <GridItem area='nav'>
      <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
    </GridItem>
    <Show above="lg">
    <GridItem area='aside' ><Genres selectedGenre={gameQuery.genre} onSelectGenres={(genre) => setGameQuery({...gameQuery, genre})}/></GridItem>
    </Show>
    <GridItem area='main' >
      <Flex gap={5} marginBottom={5}>
      <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
      <PlatformSelector  selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
      </Flex>
      <GameGrid gameQuery={gameQuery}/>
      </GridItem>
  </Grid>
    
    </>
  )
}

export default App
