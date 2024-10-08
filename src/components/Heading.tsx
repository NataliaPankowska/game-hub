import { GameQuery } from "../App"

interface Props {
    gameQuery: GameQuery
}
const Heading = ({gameQuery}: Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Game`
  return (
    <>
     <h1>{heading}</h1>
    </>
  )
}

export default Heading