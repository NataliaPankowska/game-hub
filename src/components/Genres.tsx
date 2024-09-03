

import  useGenre from '../assets/hooks/useGenre'

const Genres = () => {
   const {data} = useGenre()
   console.log(data);
  return (
    <>
    {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </>
  )
}

export default Genres