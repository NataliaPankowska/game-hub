


import './App.css'
// import GameTab from './components/GameTab'

import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

import { useState } from 'react'
import { Genre } from './assets/hooks/useGenre'
import Genres from './components/Genres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './assets/hooks/useGame'



function App() {
const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null);
const [selectedPlatform, setSelectedPlatform]= useState<Platform | null>(null)

  return (
    <>
  <Grid padding='10px' 
  templateAreas={{base: `"nav" "main"`, lg: `"nav nav" "aside main"`}}
  templateColumns={{base: '1fr', lg: '200px 1fr'}}
  >
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <Show above="lg">
    <GridItem area='aside' ><Genres selectedGenre={selectedGenres} onSelectGenres={(genre) => setSelectedGenres(genre)}/></GridItem>
    </Show>
    <GridItem area='main' >
      <PlatformSelector  selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
      <GameGrid selectedPlatform={selectedPlatform} selectedGenres={selectedGenres}/>
      </GridItem>
  </Grid>
    
    </>
  )
}

export default App
