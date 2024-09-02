
import useGenre from '../assets/hooks/useGenre'

const Genres = () => {
   const {genres} = useGenre()
  return (
    <>
    {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </>
  )
}

export default Genres