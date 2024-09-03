

import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import  useGenre from '../assets/hooks/useGenre'
import cropImageUrl from '../assets/services/image-url';

const Genres = () => {
   const {data} = useGenre()
   console.log(data);
  return (
    <>
    <List>
    {data.map(genre =>
       <ListItem key={genre.id}>
        <HStack margin='5px'>
        <Image boxSize='34px' borderRadius='5px' src={cropImageUrl(genre.image_background)} />
      <Text fontSize='lg'>{genre.name}</Text>
      </HStack>
      </ListItem>)}
    </List>
    </>
  )
}

export default Genres