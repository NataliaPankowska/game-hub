


import './App.css'
// import GameTab from './components/GameTab'

import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import Genres from './components/Genres'



function App() {


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
    <GridItem area='aside' ><Genres /></GridItem>
    </Show>
    <GridItem area='main' ><GameGrid /></GridItem>
  </Grid>
    
    </>
  )
}

export default App
