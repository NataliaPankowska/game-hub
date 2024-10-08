

import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import  useGenre, { Genre } from '../hooks/useGenre'
import cropImageUrl from '../services/image-url';

interface Props {
  onSelectGenres : (genre: Genre) => void;
  selectedGenre: Genre | null
}

const Genres = ({onSelectGenres, selectedGenre}: Props) => {
   const {data, isLoading, error} = useGenre();
   if(error) return null;
  if  (isLoading) return <Spinner />
   console.log(data);
  return (
    <>
    <List>
    {data.map(genre =>
       <ListItem key={genre.id}>
        <HStack margin='5px'>
        <Image boxSize='34px' borderRadius='5px' src={cropImageUrl(genre.image_background)} />
      <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenres(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
      </HStack>
      </ListItem>)}
    </List>
    </>
  )
}

export default Genres